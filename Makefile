VOLUME=$(shell basename $(PWD))

develop: clean build migrations.run run
# develop: clean build run

clean:
	docker-compose rm -vf

build:
	docker-compose build

run:
	docker-compose up

shell:
	docker-compose run express \
		sh

postgres.data.delete: clean
	docker volume rm $(VOLUME)_postgres

postgres.start:
	docker-compose up -d postgres
	docker-compose exec postgres \
		sh -c 'while ! nc -z postgres 5432; do sleep 0.1; done'

postgres-shell: postgres.start
	docker exec -it $(VOLUME)_postgres_1 sh

migrations.blank:
	docker-compose up -d express
	docker-compose exec express npx sequelize-cli migration:generate --name migration-skeleton

migrations.run:
	docker-compose up -d express
	docker-compose exec express npx sequelize-cli db:migrate