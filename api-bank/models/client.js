const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clients = new Schema({
    CLIENTNUM: {type: Number},
    Attrition_Flag: {type: String},
    Customer_Age: {type: Number},
    Gender: {type: String},
    Dependent_count: {type: Number},
    Education_Level: {type: String},
    Marital_Status: {type: String},
    Income_Category: {type: String},
    Card_Category: {type: String},
    Months_on_book: {type: Number},
    Total_Relationship_Count: {type: Number},
    Months_Inactive_12_mon: {type: Number},
    Contacts_Count_12_mon: {type: Number},
    Credit_Limit: {type: Number},
    Total_Revolving_Bal: {type: Number},
    Avg_Open_To_Buy: {type: Number},
    Total_Amt_Chng_Q4_Q1: {type: Number},
    Total_Trans_Amt: {type: Number},
    Total_Trans_Ct: {type: Number},
    Total_Ct_Chng_Q4_Q1: {type: Schema.Types.Mixed},
    Avg_Utilization_Ratio: {type: Schema.Types.Mixed},
    Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_1: {type: Number},
    Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2: {type: Number}
});

module.exports = mongoose.model('Client', clients);

