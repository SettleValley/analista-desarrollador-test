from sklearn.cluster import KMeans
import pandas as pd
from kneed import KneeLocator
from sklearn.preprocessing import MinMaxScaler
from bson import json_util


class KmeanUserData:

    def __init__(self, user):
        self.user = user
    
    def UserAnalytic(self):
        data = json_util.dumps(self.user)
        df = pd.read_json(data)

        # SSE with Elbow Method to choose the appropiate number of cluster
        SSE = []
        for k in range(1, 11):
            KMIterate = KMeans(n_clusters=k)
            KMIterate.fit_predict(df[["Customer_Age", "Credit_Limit"]])
            SSE.append(KMIterate.inertia_)
        kl = KneeLocator(range(1, 11), SSE, curve="convex", direction="decreasing")
        clust_appropiate = kl.elbow

        # FIT PREDICT
        km = KMeans(n_clusters=clust_appropiate)
        y_preditecd = km.fit_predict(df[["Customer_Age", "Credit_Limit"]])
        df['cluster'] = y_preditecd

        result = df.to_json(orient="records")
        parsed = json_util.loads(result)
               
        return parsed

