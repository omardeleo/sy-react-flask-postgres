from flask import (
    Blueprint,
    render_template,
    jsonify
)

from src.models import Counter

import datetime


blueprint = Blueprint('counter', __name__)


@blueprint.route('/')
def index():
    counter = Counter.get_create(label='Test')
    counter.increment()
    date = datetime.datetime.now()
    dateStr = date.strftime('%c')
    response = f"""Hi! I\'m a Flask server.\n
I\'m running on port 8080.
I\'ve been pinged {counter.count} times.
Most recent ping on {dateStr}."""

    return jsonify(response=response)