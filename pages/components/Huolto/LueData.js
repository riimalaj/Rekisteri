
export const LueData = async () => {
    const res = await fetch('./api/lueData', {
        method:'GET'
    })

    return{
        props:{res}
    }
}