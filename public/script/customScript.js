$(document).ready(function () {
    let countrylist = [
        { "id": 1, "value": "USA" },
        { "id": 2, "value": "Canada" },
        { "id": 3, "value": "India" }
    ]

    let statelist = [
        {"id":1, "value":"Alaska", "countryId": 1},
        {"id":2, "value":"California", "countryId": 1},
        {"id":3, "value":"New York", "countryId": 1},
        {"id":4, "value":"New Brunswick", "countryId": 2},
        {"id":5, "value":"Manitoba", "countryId": 2},
        {"id":6, "value":"Delhi", "countryId": 3},
        {"id":7, "value":"Bombay", "countryId": 3},
        {"id":8, "value":"Calcutta", "countryId": 3}
    ]

    let citylist = [
        {"id":1, "value":"Anchorage", "stateId": 1},
        {"id":2, "value":"Fairbanks", "stateId": 1},
        {"id":3, "value":"Lakes", "stateId": 1},
        {"id":4, "value":"Palmer", "stateId": 1},
        {"id":5, "value":"Adelanto", "stateId": 2},
        {"id":6, "value":"Artesia", "stateId": 2},
        {"id":7, "value":"Benicia", "stateId": 2},
        {"id":8, "value":"Clovis", "stateId": 2},
        {"id":9, "value":"Dublin", "stateId": 2},
        {"id":10, "value":"Manhattan", "stateId": 3},
        {"id":11, "value":"Bronx", "stateId": 3},
        {"id":12, "value":"Brooklyn", "stateId": 3},
        {"id":13, "value":"Queens", "stateId": 3},
        {"id":14, "value":"Staten Island", "stateId": 3},
        {"id":15, "value":"Bathurst", "stateId": 4},
        {"id":16, "value":"Campbellton", "stateId": 4},
        {"id":17, "value":"Dieppe", "stateId": 4},
        {"id":18, "value":"Edmundston", "stateId": 4},
        {"id":19, "value":"Fredericton", "stateId": 4},
        {"id":20, "value":"Miramichi", "stateId": 4},
        {"id":21, "value":"Moncton", "stateId": 4},
        {"id":22, "value":"Brandon", "stateId": 5},
        {"id":23, "value":"Dauphin", "stateId": 5},
        {"id":24, "value":"Flin Flon", "stateId": 5},
        {"id":25, "value":"Morden", "stateId": 5},
        {"id":26, "value":"Portage la Prairie", "stateId": 5},
        {"id":27, "value":"Selkirk", "stateId": 5},
        {"id":28, "value":"Steinbach", "stateId": 5},
        {"id":29, "value":"Thompson", "stateId": 5},
        {"id":30, "value":"Winkler", "stateId": 5},
        {"id":31, "value":"South Delhi", "stateId": 6},
        {"id":32, "value":"North Delhi", "stateId": 6},
        {"id":33, "value":"East Delhi", "stateId": 6},
        {"id":34, "value":"West Delhi", "stateId": 6},
        {"id":35, "value":"Old Delhi", "stateId": 6},
        {"id":36, "value":"New Delhi", "stateId": 6},
        {"id":37, "value":"Across Yamuna", "stateId": 6},
        {"id":38, "value":"Chembur", "stateId": 7},
        {"id":39, "value":"Borivali West", "stateId": 7},
        {"id":40, "value":"Ghatkopar West", "stateId": 7},
        {"id":41, "value":"Juhu", "stateId": 7},
        {"id":42, "value":"Mira Road", "stateId": 7},
        {"id":43, "value":"Powai", "stateId": 7},
        {"id":44, "value":"Virar West", "stateId": 7},
        {"id":45, "value":"Rajarhat", "stateId": 8},
        {"id":46, "value":"Park Street", "stateId": 8},
        {"id":47, "value":"Golpark", "stateId": 8},
        {"id":48, "value":"Chandan Nagar", "stateId": 8}
    ]

    function createOption (variable, elementToAppend) {
        $('<option>', { value: '', text: '-----Select-----' }).appendTo(elementToAppend)
        for (let i = 0; i < variable.length; i += 1) {
            $('<option>', {value: variable[i].id, text: variable[i].value}).appendTo(elementToAppend);
        }
    }

    createOption(countrylist, $('#country'))

    // for handling state option(s)
    $('#country').on('change', function () {
        let selectedCountryOption = $(this).val()
        $('#country').val(selectedCountryOption)

        // filtered state according to country
        let stateOption = statelist.filter(obj => obj.countryId == selectedCountryOption)
        $('#state').empty()
        createOption(stateOption, $('#state'))
    })

    // for handling city option(s)
    $('#state').on('change', function () {
        let selectedStateOption = $(this).val()
        $('#state').val(selectedStateOption)

        // filtered city according to state
        let cityOption = citylist.filter(obj => obj.stateId == selectedStateOption)
        $('#city').empty()
        createOption(cityOption, $('#city'))
    })

    // form submisstion
    $('#userFormData').submit(function (event) {
        event.preventDefault()

        let userReqObj = {
            firstname: $('#firstName').val(),
            lastname: $('#lastName').val(),
            email: $('#emailaddress').val(),
            country: $('#country').val(),
            state: $('#state').val(),
            city: $('#city').val(),
            gender: $('input[name="gender"]').val(),
            dob: $('#dateOfBirth').val(),
            age: $('#presentAge').val()
        }

        $.ajax({
            method: 'POST',
            url: '/api/create',
            data: userReqObj,
            success: function (data) {
                if (data.error) {
                    $('p#notification').css('color', 'red').text(data.message)
                } else {
                    $('#notification').css('color', 'green').text(data.message)
                    $('#firstName').val('')
                    $('#lastName').val('')
                    $('#emailaddress').val('')
                    $('#country').val('')
                    $('#state').empty()
                    $('#state').val('')
                    $('#city').empty()
                    $('#city').val('')
                    $('input[name="gender"]').val('1')
                    $('#dateOfBirth').val('')
                    $('#presentAge').val('0')
                }
            },
            error: function(jqXHR, error) {
                $('p#notification').css('color', 'red').text('Error Occurred While Submitting the Information!!')
            }
        })
    })

    // for resetting form
    $('#reset').on('click', function () {
        $('#firstName').val('')
        $('#lastName').val('')
        $('#emailaddress').val('')
        $('#country').val('')
        $('#state').empty()
        $('#state').val('')
        $('#city').empty()
        $('#city').val('')
        $('input[name="gender"]').val('1')
        $('#dateOfBirth').val('')
        $('#presentAge').val('0')
    })

    // calculating the Age according to date-of-birth
    $('#dateOfBirth').on('change', function () {
        let birthDate = new Date($(this).val())
        let currentDate = new Date()

        let ageInYears = currentDate.getFullYear() - birthDate.getFullYear()
        let ageInMonths = (currentDate.getMonth() - birthDate.getMonth() + currentDate.getDate() / 30) / 12;

        let floatAge = ageInYears + ageInMonths

        let value = floatAge.toFixed(1)

        $('#presentAge').val(value)
    })
})