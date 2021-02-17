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
    response = "Flask server"
    return jsonify(response=response)

@blueprint.route('/api/v1/reset/')
def reset():
    counter = Counter.get_create(label='Test')
    counter.reset()
    return jsonify(response=counter.count)

@blueprint.route('/api/v1/')
def api():
    counter = Counter.get_create(label='Test')
    counter.increment()
    date = datetime.datetime.now()
    dateStr = date.strftime('%c')
    response = f"""Flask server running on port 8080.
Pinged {counter.count} {"time" if counter.count == 1 else "times"}, most recently on {dateStr}."""

    return jsonify(response=response)