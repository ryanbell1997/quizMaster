from flask import Flask
from flask import request
import json
import pymongo
import random
import config
from flask import jsonify

app = Flask(__name__)


client = pymongo.MongoClient("mongodb+srv://" + config.db_username + ":" + config.db_password + "@maincluster.kgy8s.mongodb.net/quizzes?retryWrites=true&w=majority")
db = client.quizzes


def id_generator():
    id = round((random.random() * 10000))
    mycol = db["userQuizzes"]
    myQuery = { "_id": id }
    queryResult = mycol.find(myQuery).limit(1)
    queryCheck = {}
    for result in queryResult:
        queryCheck = result

    if "_id" in queryCheck.keys():
        id_generator()
    else:
        return id
        

@app.route('/storeQuiz', methods = ['POST'])
def add_quiz():
    myDict = {"_id":id_generator(), "questions":request.json }
    mycol = db["userQuizzes"]
    x = mycol.insert_one(myDict)
    return jsonify(x.inserted_id)
