
const batteryLevel = require('battery-level');
const isCharging = require('is-charging');
const notifier = require('node-notifier');

(async() => {

    let bLevel = await batteryLevel();

    isCharging().then(result => {
        if(result == true){
            if(bLevel > 0.98){
                notifier.notify({
                    title: 'Bateria',
                    message: 'carga completa'});
                    
            }
        }else{
            if(bLevel < 0.2){
                console.log("carga muito baixa");
                notifier.notify({
                    title: 'Bateria',
                    message: 'carga muito baixa'});
            }
        }
    });

})();
