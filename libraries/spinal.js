function Spinal(baseURL)
{
    if(baseURL == null)
    {
        baseURL = 'http://localhost:5000/';
        console.log('no url given, using default: ' + baseURL);
    }

    this.baseURL     =  baseURL;
    this.get         =  function(keys, onSuccess, onError)
                        {
                            var req = new XMLHttpRequest();
                            req.addEventListener('load', function(r) {
                                
                                if(req.status == 200)
                                {
                                    var response = req.response;
                                    console.log(response);
                                    onSuccess(response);
                                }
                                else if(onError != null)
                                {
                                    onError(response);
                                }

                            });

                            req.responseType = "json";
                            req.open('GET', this.baseURL + 'data/?keys=' + keys);
                            req.send();

                        };

    this.post        =  function (obj, onSuccess, onError)
                        {
                            var req = new XMLHttpRequest();
                            req.addEventListener('load', function(r) {
                                
                                if(req.status == 200)
                                {
                                    onSuccess(r);
                                }
                                else if(onError != null)
                                {
                                    onError(r);
                                }

                            });

                            req.responseType = "json";
                            req.open('POST', this.baseURL + 'data');
                            req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                            req.send(JSON.stringify(obj));
                        };     
}
