
function CapitalizeFirstCharacter(params) {
    const capitalized = params.charAt(0).toUpperCase()+ params.slice(1)
    return capitalized
    
}
export default CapitalizeFirstCharacter;