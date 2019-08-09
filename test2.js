const translate = require ('./index') ;

const res = translate('về nhà', {from: 'auto', to: 'en'})
              .then((res)=>{
                console.log('res',res)
              })
              .catch((error)=>{
                console.log(error)
              })
