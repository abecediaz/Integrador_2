document.getElementById("calculation").addEventListener(
    "click", function(){

    const costos = {
        Classic: {
            periods: {
                "3 months": 14.99,
                "6 months": 13.00,
                "12 months": 35.00
            }
        },
        Standard: {
            periods: {
                "3 months": 22.99,
                "6 months": 20.00,
                "12 months": 57.00
            }
        },
        Premium: {
            periods: {
                "3 months": 29.99,
                "6 months": 25.00,
                "12 months": 70.00
            }
        }
    };
    const plan = document.getElementById("plan").value;
    const period = document.getElementById("period").value;
    let total;

    if (period === "3 months") {
        total = costos[plan].periods["3 months"];
        console.log(costos[plan].periods["3 months"]);
    }
    else {
        total = (costos[plan].periods["3 months"] + costos[plan].periods[period]).toFixed(2);
        console.log(costos[plan].periods["3 months"]);
        console.log(costos[plan].periods[period]);
    }

    document.getElementById('total-price').innerText = "$" + total + " USD";
    console.log("El total es: $" + total);
    });