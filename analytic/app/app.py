from flask import Flask, request, jsonify, Response
from flask_pymongo import PyMongo
from bson import json_util
from util import KmeanUserData

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/bank"
mongo = PyMongo(app)

@app.route('/users/<id>', methods=['GET'])
def kmeans(id):
    UserData = mongo.db.clients.find_one_or_404({"CLIENTNUM": int(id)})
    AgeUserCompare = mongo.db.clients.find({"Customer_Age": UserData["Customer_Age"]})

    Kalgorithm = KmeanUserData(AgeUserCompare)
    val = Kalgorithm.UserAnalytic()
    response = json_util.dumps(val)

    return Response(response, mimetype='application/json')

@app.errorhandler(404)
def not_found(error=None):
    response = jsonify({
        'message':'No se encontro el recurso' + request.url,
        'status' : 404
    })
    response.status_code = 404
    return response


if __name__ == "__main__":
    app.run(debug=True)