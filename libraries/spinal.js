function Spinal(baseURL)
{
    if(baseURL == null)
    {
        baseURL = 'http://127.0.0.1:5000';
        console.log('no url given, using default: ' + baseURL);
    }

    this.baseURL     =  baseURL;
    this.get         =  function(keys, callback)
                        {
                            $.ajax({
                                url:        this.baseURL + '/data/?keys=' + keys,
                                type:       'get',
                                dataType:   'json',
                                success:    callback
                            }); 
                        };

    this.post        =   function (obj, callback)
                        {
                            $.ajax({
                                url:        this.baseURL + '/data',
                                type:       'post',
                                dataType:   'json',
                                data:       JSON.stringify(obj), 
                                success:    callback
                            });     
                        };     
}
