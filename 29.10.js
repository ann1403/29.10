let box1 = [100, 100, 100]
let price1box = 50;
let box2 = [160, 70, 70]
let price2box = 50;
let box3 = [100, 15, 30]
let price3box = 25;
let usersbox = [100, 10, 10]

function box() {
    if (usersbox[2] < box3[2]) {
        if (usersbox[1] < box3[1]) {
            if (usersbox[0] < box3[0] || usersbox[0] == box3[0]) {
                console.log("Your price =" + price3box)
            } else {
                if (usersbox[2] < box2[2]) {
                    console.log("Your price =" + price2box)
                } else {
                    console.log("Your box price =" + price1box)
                }
            }
        } else {
            if (usersbox[1] < box2[1]) {
                console.log("Your price =" + price2box)
            } else {
                console.log("Your box price =" + price1box)
            }
        }
    } else {
        console.log("Your box price =" + price2box)
    }
}

box();