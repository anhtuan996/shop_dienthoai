<!-- BEGIN: main -->
<form
    action="{NV_BASE_ADMINURL}index.php?{NV_LANG_VARIABLE}={NV_LANG_DATA}&amp;{NV_NAME_VARIABLE}={MODULE_NAME}&amp;{NV_OP_VARIABLE}={OP}"
    method="post">
    <table class="table table-striped table-bordered table-hover">
        <tr class="text-center">
            <th class="text-nowrap text-center">Thứ tự</th>
            <th class="text-nowrap text-center">Tên Khách hàng</th>
            <th class="text-nowrap text-center">Tên Sản phẩm</th>
            <th class="text-nowrap text-center">Ảnh</th>
            <th class="text-nowrap text-center">Địa chỉ</th>
            <th class="text-nowrap text-center">Số điện thoại</th>
            <th class="text-nowrap text-center">Ngày đặt hàng</th>
            <th class="text-nowrap text-center">Lưu ý</th>
            <th class="text-center text-nowrap">Chức năng</th>
        </tr>
        </thead>
        <tbody>
            <!-- BEGIN: list_phone -->
            <tr>
                <td class="text-center">
                    <select onchange="" class="form-control weight_{LIST.id}" name="weight" id="">
                        <!-- BEGIN: stt_phone -->
                        <option value=""></option>
                        <!-- END: stt_phone -->
                    </select>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-center text-nowrap">
                    <a href="" class="btn btn-default btn-sm"><i class="fa fa-edit"></i> Sửa</a>
                    <a href="" class="btn btn-danger btn-sm delete"><i class="fa fa-trash-o"></i>
                        Xóa</a>
                </td>
            </tr>
            <!-- END: list_phone -->
        </tbody>
    </table>
    <div style="text-align: center;">

    </div>

</form>


<!-- END: main -->