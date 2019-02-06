module.exports = {
    dataFromEach: function (data, keyname) {
        var getData = [];
        this.dataInArray(data, keyname, function(data_id){
            getData.push(data_id);
        });
        return getData;
    },

    dataInArray: function (data_value, keys_name, callback){
        data_value.forEach( d=>{
            callback(d[keys_name]);
        })
    }
};