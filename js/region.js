// 四级联动地区
$.ajax({
    url: './php/region/province.php',
    type: 'get',
    dataType: 'json',
    success(res) {
        let str = ''
        res.forEach(elem => {
            str += `<option value="${elem.province_id}">${elem.name}</option>`
        });
        $('#province').html(str);


        $('#province').change(function () {
            $.ajax({
                url: './php/region/city.php',
                type: 'get',
                dataType: 'json',
                data: { pid: $('#province').val() },
                success(res) {
                    let str = ''
                    res.forEach(elem => {
                        str += `<option value="${elem.city_id}">${elem.name}</option>`
                    });
                    $('#city').html(str);

                    $('#city').change(function () {
                        $.ajax({
                            url: './php/region/area.php',
                            type: 'get',
                            dataType: 'json',
                            data: { cid: $('#city').val() },
                            success(res) {
                                let str = ''
                                res.forEach(elem => {
                                    str += `<option value="${elem.area_id}">${elem.name}</option>`
                                });
                                $('#district').html(str);

                                $('#district').change(function () {
                                    $.ajax({
                                        url: './php/region/town.php',
                                        type: 'get',
                                        dataType: 'json',
                                        data: { aid: $('#district').val() },
                                        success(res) {
                                            let str = ''
                                            res.forEach(elem => {
                                                str += `<option value="${elem.city_id}">${elem.name}</option>`
                                            });
                                            $('#area').html(str);

                                        }
                                    })
                                })
                            }
                        })
                    })
                }
            })
        })
    }
})