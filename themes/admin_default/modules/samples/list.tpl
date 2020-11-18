<!-- BEGIN: main -->
<form
    action="{NV_BASE_ADMINURL}index.php?{NV_LANG_VARIABLE}={NV_LANG_DATA}&amp;{NV_NAME_VARIABLE}={MODULE_NAME}&amp;{NV_OP_VARIABLE}={OP}"
    method="post">
    <table class="table table-striped table-bordered table-hover">
        <tr class="text-center">
            <th class="text-nowrap">Thứ tự</th>
            <th class="text-nowrap">Họ tên</th>
            <th class="text-nowrap">Số điện thoại</th>
            <th class="text-nowrap">Email</th>
            <th class="text-nowrap">Giới tính</th>
            <th class="text-nowrap">Kích Hoạt</th>
            <th class="text-nowrap">Địa chỉ</th>
            <th class="text-center text-nowrap">Chức năng</th>
        </tr>
        </thead>
        <tbody>
            <!-- BEGIN: list -->
            <tr>
                <td class="text-center">
                    <select onchange="nv_change_weight({LIST.id})" class="form-control weight_{LIST.id}" name="weight"
                        id="">
                        <!-- BEGIN: stt -->
                        <option value="{J}" {J_SELECT}>{J}</option>
                        <!-- END: stt -->
                    </select>
                </td>
                <td>{LIST.fullname}</td>
                <td>{LIST.phone}</td>
                <td>{LIST.email}</td>
                <td>{LIST.gender}</td>
                <td style="text-align: center;">
                    <input name="active" onchange="nv_change_active({LIST.id})" {LIST.active} type="checkbox">
                </td>
                <td>{LIST.adress}</td>
                <td class="text-center text-nowrap">
                    <a href="{LIST.url_edit}" class="btn btn-default btn-sm"><i class="fa fa-edit"></i> Sửa</a>
                    <a href="{LIST.url_delete}" class="btn btn-danger btn-sm delete"><i class="fa fa-trash-o"></i>
                        Xóa</a>
                </td>
            </tr>
            <!-- END: list -->
        </tbody>
    </table>
    <div style="text-align: center;">
        {GP}
    </div>

</form>
<script>
function nv_change_active(id) {
    $.ajax({
        url: script_name + '?' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable +
            '=list&change_active=2&id=' + id,
        success: function(result) {
            if (result == "Error") {
                alert("Lỗi k xác định !");
                location.reload();
            }
        }
    })
}

function nv_change_weight(id) {
    var new_weight = $('.weight_' + id).val();
    $.ajax({
        url: script_name + '?' + nv_name_variable + '=' + nv_module_name + '&' + nv_fc_variable +
            '=list&change_weight=2&id=' + id + '&new_weight=' + new_weight,
        success: function(result) {
            if (result != "Error") {
                location.reload();
            }
        }
    })
}
$(document).ready(function() {
    $('.delete').click(function() {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            return true;
        } else {
            return false;
        }
    });

});
</script>

<!-- END: main -->