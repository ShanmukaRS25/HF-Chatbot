
from flask import Flask, render_template, request, jsonify
import rasa
from rasa.model import get_latest_model
from rasa.core.agent import Agent

app = Flask(__name__)

# Load Rasa model
model_path = get_latest_model()
agent = Agent.load(model_path)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    response = agent.handle_text(user_message)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
