from sklearn.cluster import KMeans
from tabulate import tabulate
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from matplotlib import pyplot as plt

df = pd.read_csv('BankChurners.csv')
df.head()

plt.scatter(df["Customer_Age"], df["Credit_Limit"])
plt.savefig('example.png')

km = KMeans(n_clusters=4)
# print(km)
y_preditecd = km.fit_predict(df[["Customer_Age", "Credit_Limit"]])
# print(y_preditecd)
df['cluster'] = y_preditecd
# print(df.head())
df1 = df[df.cluster == 0]
df2 = df[df.cluster == 1]
df3 = df[df.cluster == 2]
df4 = df[df.cluster == 3]

plt.scatter(df1.Customer_Age, df1['Credit_Limit'], color='green')
plt.scatter(df2.Customer_Age, df2['Credit_Limit'], color='red')
plt.scatter(df3.Customer_Age, df3['Credit_Limit'], color='black')
plt.scatter(df4.Customer_Age, df4['Credit_Limit'], color='blue')

print(km.cluster_centers_)

plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:,1], color='purple', marker='*', label='centroides')

plt.xlabel('Age')
plt.ylabel('CreditLimite')
plt.legend()

plt.savefig('cluster.png')
