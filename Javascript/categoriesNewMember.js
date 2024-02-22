/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. */

function openOrSenior(data) {
    let tabFinal = [];
    for (let i = 0; i < data.length; i++) {
        let tab = data[i]
        if (tab[0] >= 55 && tab[1] > 7) {
            tabFinal.push("Senior")
        } else {
            tabFinal.push("Open")
        }
    }
    return tabFinal
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))