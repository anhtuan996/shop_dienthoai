<!-- BEGIN: main -->
<form
    action="{NV_BASE_ADMINURL}index.php?{NV_LANG_VARIABLE}={NV_LANG_DATA}&amp;{NV_NAME_VARIABLE}={MODULE_NAME}&amp;{NV_OP_VARIABLE}={OP}"
    method="post">
    <div style="color: red;">
        <h1><strong>Chi tiết cấu hình Điện thoại</strong></h1>
    </div>
    <table style="margin-top: 30px;" class="table table-striped table-bordered table-hover">
        <tr class="text-center">
            <th class="text-nowrap text-center">Thứ tự</th>
            <th class="text-nowrap text-center">Tên Điên thoại</th>
            <th class="text-nowrap text-center">Màn hình</th>
            <th class="text-nowrap text-center">Ảnh</th>
            <th class="text-nowrap text-center">Hệ điều hành</th>
            <th class="text-nowrap text-center">Camera trước</th>
            <th class="text-nowrap text-center">Camera sau</th>
            <th class="text-nowrap text-center">CPU</th>
            <th class="text-nowrap text-center">RAM</th>
            <th class="text-nowrap text-center">Thẻ nhớ</th>
            <th class="text-nowrap text-center">SIM</th>
            <th class="text-nowrap text-center">Dung lượng pin</th>
            <th class="text-center text-nowrap">Chức năng</th>
        </tr>
        </thead>
        <tbody>
            <!-- BEGIN: list_phone -->
            <tr>
                <td class="text-center">
                    <select onchange="" class="form-control" name="weight" id="">
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


    <div style="color: red;">
        <h1><strong>Thông tin Phụ kiện</strong></h1>
    </div>
    <table class="table table-striped table-bordered table-hover">
        <tr class="text-center">
            <th class="text-nowrap text-center">Thứ tự</th>
            <th class="text-nowrap text-center">Tên Phụ kiện</th>
            <th class="text-nowrap text-center">Mô tả</th>
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