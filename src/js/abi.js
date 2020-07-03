const abi = [{"constant":true,
"inputs":[{"name":"","type":"address"}],
"name":"balances",
"outputs":[{"name":"","type":"uint256"}],
"payable":false,
"stateMutability":"view",
"type":"function"},

{
    "constant":true,"inputs":[],
"name":"getHarvesters",
"outputs":[{"name":"","type":"address[16]"}],
"payable":false,
"stateMutability":"view",
"type":"function"},

{
    
    "constant":false,
    "inputs":[{"name":"ressourceId","type":"uint256"}],
    "name":"harvest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"harvesters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Sent","type":"event"}]




    module.exports = abi;




