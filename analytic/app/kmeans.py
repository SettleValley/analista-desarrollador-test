from sklearn.cluster import KMeans
import pandas as pd
from kneed import KneeLocator
from sklearn.preprocessing import MinMaxScaler
from matplotlib import pyplot as plt

df = pd.read_csv('BankChurners.csv')
df.head()

plt.scatter(df["Customer_Age"], df["Credit_Limit"])
# Grafica de como se ven los usuarios comparando Edad y limite de credito
# Para segmentar al usuario por tipo de tarjeta
# plt.savefig('graph.png') 

# km = KMeans(n_clusters=4) 
# SSE with Elbow Method to choose the appropiate number of cluster
# SSE = []
# for k in range(1, 11):
#     km = KMeans(n_clusters=k)
#     km.fit_predict(df[["Customer_Age", "Credit_Limit"]])
#     SSE.append(km.inertia_)

# plt.plot(range(1, 11), SSE)
# plt.xticks(range(1, 11))
# plt.xlabel("Number of Clusters")
# plt.ylabel("SSE")
# plt.savefig('elbowmethod.png')

# kl = KneeLocator(range(1, 11), SSE, curve="convex", direction="decreasing")
# print(kl.elbow)
# KMeans running
km = KMeans(n_clusters=3) 

y_preditecd = km.fit_predict(df[["Customer_Age", "Credit_Limit"]])
print(y_preditecd)
df['cluster'] = y_preditecd

df1 = df[df.cluster == 0]
df2 = df[df.cluster == 1]
df3 = df[df.cluster == 2]
# df4 = df[df.cluster == 3]

# # Try to export csv with news columns predited
df.to_csv('./newdata.csv', index = False, header=True) 

plt.scatter(df1.Customer_Age, df1['Credit_Limit'], color='green')
plt.scatter(df2.Customer_Age, df2['Credit_Limit'], color='red')
plt.scatter(df3.Customer_Age, df3['Credit_Limit'], color='black')

print(km.cluster_centers_)

plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:,1], color='purple', marker='*', label='centroides')

plt.xlabel('Age')
plt.ylabel('CreditLimite')
plt.legend()

plt.savefig('cluster.png')
