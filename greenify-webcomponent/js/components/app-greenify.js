
class AppGreenify extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.getElementById('greenify_widget');
        this.shadowRoot.appendChild(template.content.cloneNode(true));


        if (this.getAttribute('theme') === "dark") {
            //console.log('theme is dark');
        }
        else if (this.getAttribute('theme') === "light") {
            //console.log('theme is light');
        }
    }

    connectedCallback() {
        //console.log('component added to the dom');
        const fullComponent = this;

        this.shadowRoot.getElementById('js_toggle_general_box').addEventListener('click', function (e) {
            //console.log(fullComponent.shadowRoot);
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.toggle('open_mode');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('tab_1');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_2');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_3');
        });

        /*START tabs here*/
        this.shadowRoot.getElementById('js_toggle_tab_1').addEventListener('click', function (e) {
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('open_mode');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('tab_1');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_2');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_3');
        });
        this.shadowRoot.getElementById('js_toggle_tab_2').addEventListener('click', function (e) {
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('open_mode');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('tab_2');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_1');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_3');
        });
        this.shadowRoot.getElementById('js_toggle_tab_3').addEventListener('click', function (e) {
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('open_mode');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.add('tab_3');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_2');
            fullComponent.shadowRoot.getElementById('js_greenify_widget').classList.remove('tab_1');
        });
        /*END tabs here*/

        fetchCharging();
        fetchMuseum();
        fetchEvent();

        //FETCH DATA CHARGING
        function fetchCharging() {
            var apiUrl = "http://ipchannels.integreen-life.bz.it/emobility/rest/plugs/get-station-details";

            fetch(apiUrl)
                .then(res => res.text())          // convert to plain text
                .then(text => JSON.parse(text))  // then log it out
                .then(function (jsonresp) {
                    filterData(jsonresp);
                })
                .catch(function (error) {
                    console.log(error);
                    //alert("API fetch error");
                });

            function filterData(data) {
                data.forEach(element => {
                    //console.log(element);
                    //let latitude = element.latitude;
                    //let longitude = element.longitude;
                    //console.log(element.name);

                    //Set iframe src
                    //let chargingSrc = 'https://maps.google.com/maps?q=' + latitude + ',' + longitude + '&hl=es&z=14&output=embed';
                    //console.log(chargingSrc);
                    //if (chargingSrc.length > 0) {
                    //fullComponent.shadowRoot.getElementById('charging_map').src = chargingSrc;
                    //}
                    let index = 0;
                    if (index <= 10) {

                        var data_container = fullComponent.shadowRoot.getElementById("data_charging");

                        var row = document.createElement("div");
                        row.className = 'row';

                        var data_name = document.createElement("div");
                        data_name.className = 'data_name';
                        data_name.appendChild(document.createTextNode(element.name));

                        var data_place = document.createElement("div");
                        data_place.className = 'data_place';
                        data_place.appendChild(document.createTextNode('Bolzano'));

                        var data_discount = document.createElement("div");
                        data_discount.className = 'data_discount'; //Make dynamic in the future
                        data_discount.appendChild(document.createTextNode('10% Discount'));

                        var data_link = document.createElement("div");
                        data_link.className = 'data_link';
                        data_link.appendChild(document.createTextNode(''));

                        row.appendChild(data_name);
                        row.appendChild(data_place);
                        row.appendChild(data_discount);
                        row.appendChild(data_link);
                        data_container.appendChild(row);
                    }
                });
            }
        }

        //FETCH DATA EVENT
        function fetchEvent() {
            var apiUrl = "http://tourism.opendatahub.bz.it/api/Event?pagenumber=1&pagesize=10&sort=desc";

            fetch(apiUrl)
                .then(res => res.text())          // convert to plain text
                .then(text => JSON.parse(text))  // then log it out
                .then(function (jsonresp) {
                    console.log(jsonresp.Items);
                    filterData(jsonresp.Items);
                })
                .catch(function (error) {
                    console.log(error);
                    //alert("API fetch error");
                });

            function filterData(data) {
                data.forEach(element => {
                    //DOES NOT EXIST ANYMORE
                    //Append li for each event

                    var data_container = fullComponent.shadowRoot.getElementById("data_museums");

                    var row = document.createElement("div");
                    row.className = 'row';

                    var data_name = document.createElement("div");
                    data_name.className = 'data_name';
                    data_name.appendChild(document.createTextNode(element.Shortname));

                    var data_place = document.createElement("div");
                    data_place.className = 'data_place'; //Make dynamic in the future
                    data_place.appendChild(document.createTextNode('Bolzano'));

                    var data_discount = document.createElement("div");
                    data_discount.className = 'data_discount'; //Make dynamic in the future
                    data_discount.appendChild(document.createTextNode('10% Discount'));

                    var data_link = document.createElement("div");
                    data_link.className = 'data_link';
                    data_link.appendChild(document.createTextNode(''));

                    row.appendChild(data_name);
                    row.appendChild(data_place);
                    row.appendChild(data_discount);
                    row.appendChild(data_link);
                    data_container.appendChild(row);

                });
            }
        }


        //FETCH DATA MUSEEN
        function fetchMuseum() {
            var apiUrl = "http://daten.buergernetz.bz.it/services/musport/v1/geojson";

            fetch(apiUrl)
                .then(res => res.text())
                .then(text => JSON.parse(text))
                .then(function (jsonresp) {
                    //console.log(jsonresp);
                    filterData(jsonresp.features);
                })
                .catch(function (error) {
                    console.log(error);
                    //alert("API fetch error");
                });

            function filterData(data) {
                let index = 0;
                data.forEach(element => {
                    if (element.properties.BEZEICHNUNG_E !== null && index <= 10) {
                        index++;
                        //console.log(element.properties.BEZEICHNUNG_E + " ----- " + element.properties.ORTSCHAFT_I);

                        var data_container = fullComponent.shadowRoot.getElementById("data_museums");

                        var row = document.createElement("div");
                        row.className = 'row';

                        var data_name = document.createElement("div");
                        data_name.className = 'data_name';
                        data_name.appendChild(document.createTextNode(element.properties.BEZEICHNUNG_E));

                        var data_place = document.createElement("div");
                        data_place.className = 'data_place';
                        data_place.appendChild(document.createTextNode(element.properties.ORTSCHAFT_I));

                        var data_discount = document.createElement("div");
                        data_discount.className = 'data_discount'; //Make dynamic in the future
                        data_discount.appendChild(document.createTextNode('10% Discount'));

                        var data_link = document.createElement("div");
                        data_link.className = 'data_link';
                        data_link.appendChild(document.createTextNode(''));

                        row.appendChild(data_name);
                        row.appendChild(data_place);
                        row.appendChild(data_discount);
                        row.appendChild(data_link);
                        data_container.appendChild(row);
                    }
                });
            }
        }

    }

    disconnectedCallback() {
        //console.log('component removed from the dom');
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }

}

window.customElements.define('app-greenify', AppGreenify);
