let mdDir= '../../public/post'
let fs = require('fs')



function returnMDList(){
    fs.readdir(mdDir, (err, list) => {
        if (err) {
            console.error(err)
            return err
        }
        for(let i in list){
            console.log(list[i])
        }
    })
}

// returnMDList()
returnMDList()