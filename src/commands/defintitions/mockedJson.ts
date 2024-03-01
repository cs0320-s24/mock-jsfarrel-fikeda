export const datasetMap = new Map<string, string[][]>();
export const searchResultMap1 = new Map<string, string[][]>();
export const searchResultMap2 = new Map<string, string[][]>();

 datasetMap.set("dataset1", [
    ['Street', 'Price', 'Bedrooms', 'Bathrooms', 'Sqft', 'Zip', 'City', 'State', 'Type'],
    ['Brown St', '100000', '3', '2', '1500', '12345', 'Providence', 'RI', 'House'],
    ['Green St', '200000', '3', '3', '2000', '12235', 'East Providence', 'RI', 'House'],
    ['Blue St', '300000', '2', '4', '2500', '12023', 'Warwick', 'RI', 'Apartment'],
    ['Red St', '400000', '3', '5', '3000', '12345', 'Providence', 'RI', 'House'],
    ['Yellow St', '500000', '3', '6', '3500', '12345', 'Providence', 'RI', 'Townhouse'],
    ['Orange St', '6000', '2', '4', '400', '12345', 'Newport', 'RI', 'Apartment'],
    ['Purple St', '250000', '3', '2', '1800', '12346', 'Cranston', 'RI', 'House'],
    ['Silver St', '180000', '2', '1', '1200', '12347', 'Pawtucket', 'RI', 'Apartment'],
    ['Gold St', '350000', '3', '3', '2200', '12348', 'Johnston', 'RI', 'Townhouse'],
    ['White St', '450000', '2', '4', '2800', '12349', 'Barrington', 'RI', 'House'],
    ['Black St', '200000', '3', '2', '1600', '12350', 'Bristol', 'RI', 'House'],
    ['Gray St', '320000', '2', '3', '2000', '12351', 'Woonsocket', 'RI', 'Townhouse']
]);

datasetMap.set("dataset2", [
    ['Street', 'Price', 'City', 'State', 'Type'],
    ['Dog Ave', '100000', 'Providence', 'RI', 'House'],
    ['Cat St', '22300', 'East Providence', 'RI', 'House'],
    ['Bird St', '230000', 'Warwick', 'RI', 'Apartment'],
    ['Fish St', '4000', 'Providence', 'RI', 'House'],
    ['Turtle St', '28000', 'Providence', 'RI', 'Townhouse']
]);

datasetMap.set("dataset3", [
    []
]);

datasetMap.set("dataset4", [
    ['Street', 'Price', 'City', 'State', 'Type'],
    ['Dog Ave', '100000', 'Providence', 'RI'],
]);



searchResultMap1.set("1Brown", [
    ['Street', 'Price', 'Bedrooms', 'Bathrooms', 'Sqft', 'Zip', 'City', 'State', 'Type'],
    ['Brown St', '100000', '3', '2', '1500', '12345', 'Providence', 'RI', 'House']
]);

searchResultMap1.set("1Gold", [
    ['Street', 'Price', 'Bedrooms', 'Bathrooms', 'Sqft', 'Zip', 'City', 'State', 'Type'],
    ['Gold St', '350000', '3', '3', '2200', '12348', 'Johnston', 'RI', 'Townhouse']
]);

searchResultMap1.set("Bedrooms2", [
    ['Street', 'Price', 'Bedrooms', 'Bathrooms', 'Sqft', 'Zip', 'City', 'State', 'Type'],
    ['Blue St', '300000', '2', '4', '2500', '12023', 'Warwick', 'RI', 'Apartment'],
    ['Orange St', '6000', '2', '4', '400', '12345', 'Newport', 'RI', 'Apartment'],
    ['Silver St', '180000', '2', '1', '1200', '12347', 'Pawtucket', 'RI', 'Apartment'],
    ['White St', '450000', '2', '4', '2800', '12349', 'Barrington', 'RI', 'House'],
    ['Gray St', '320000', '2', '3', '2000', '12351', 'Woonsocket', 'RI', 'Townhouse']
]);

searchResultMap2.set("StreetDog", [
    ['Street', 'Price', 'City', 'State', 'Type'],
    ['Dog Ave', '100000', 'Providence', 'RI', 'House'],
]);


