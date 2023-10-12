const emailPattern = /^[a-zA-Z0-9][0-9a-zA-Z\\.]{1,62}[@]([a-zA-Z0-9\-]+[\\.])+[a-zA-Z]{2,3}$/;
const phonePattern = /^(?:\+84|84|0)[35789][0-9]{8}$/;

const nameCheck = (str) => { return str.length > 0 };
const validation = {
    'fName': false,
    'lName': false,
    'email': false,
    'phoneNumber': false,
};


const getSetTotal = () => {
    let total = $('#plan').val();
    total -= $("#proof").get(0).files.length > 0 ? total * 0.15 : 0;
    $("#total").text(total)
}

const finalValid = (jsonObj) => {
    for (const id in jsonObj) {
        if (jsonObj[id] == false) {
            return false;
        }
    }
    return true;
}

$(() => {
    const params = new URLSearchParams(window.location.search)
    params.has("plan") ? $('#plan').val(params.get("plan")) : null;

    $("input").on('input', function () {
        const id = this.id;
        const str = $(this).val();
        const isValid = id == 'email' ? emailPattern.test(str) : id == 'phoneNumber' ? phonePattern.test(str) : id == 'fName' || 'lName' ? str.length > 0 : true;
        if (isValid) {
            $(this).removeClass("invalid")
            validation[id] = true;
        } else {
            $(this).addClass("invalid");
            validation[id] = false;
        }
        if (finalValid(validation)) {
            $("#submitButton").attr('disabled', false);
        } else {
            $("#submitButton").attr('disabled', true);
        }
    });

    $("#submitButton").click(() => {
        $("#statusModal").modal('show');
    });

    getSetTotal();
    $("#proof, #plan").on("input", getSetTotal);
});