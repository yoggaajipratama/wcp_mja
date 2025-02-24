export default defineEventHandler(async (event)=>{
    const dataEvent = await readBody(event)
    const token = dataEvent.token
    
    if(token == `mLc#:0_[$c<Ki_;F`){
        const config = useRuntimeConfig()
        return JSON.stringify(config.secretKey)
    }
    else{
        return JSON.stringify(null)
    }
})