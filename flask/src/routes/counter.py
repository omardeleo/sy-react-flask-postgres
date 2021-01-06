from flask import (
    Blueprint,
    render_template,
    jsonify
)

from src.models import Counter


blueprint = Blueprint('counter', __name__)


@blueprint.route('/api/v1/')
def index():
    counter = Counter.get_create(label='Test')
    counter.increment()
    # return render_template('counter.html', counters=Counter.list())
    response = f'Hi! I\'m a Flask server.\n I\'m running on port 8080. I\'ve been pinged {counter.count} times'
    return jsonify(response=response)
