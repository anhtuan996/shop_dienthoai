<!-- BEGIN: main -->
<form
    action="{NV_BASE_ADMINURL}index.php?{NV_LANG_VARIABLE}={NV_LANG_DATA}&amp;{NV_NAME_VARIABLE}={MODULE_NAME}&amp;{NV_OP_VARIABLE}={OP}"
    method="post" enctype='multipart/form-data'>
    <input type="hidden" class="form-control" name="student_id" value="">

    <div class="container">
        <div class="form-group">
            <label for=""><strong>Tên điện thoại : </strong> </label>
            <input type="text" class="form-control" name="student_name" value="">
        </div>
        <div class="form-group">
            <label><strong>Ảnh : </strong></label>
            <input type="file" name="avatar">
        </div>
        <div class="form-group">
            <label for=""><strong>Màn hình : </strong> </label>
            <input type="text" class="form-control" name="student_email" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>Hệ điều hành : </strong> </label>
            <input type="text" class="form-control" name="student_email" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>Camera trước : </strong></label>
            <input type="text" class="form-control" name="student_phone" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>Camera sau : </strong></label>
            <input type="text" class="form-control" name="student_phone" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>CPU : </strong></label>
            <input type="text" class="form-control" name="student_phone" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>RAM : </strong> </label> <input type="text" class="form-control" name="student_phone"
                value="">
        </div>
        <div class="form-group">
            <label for=""><strong>Thẻ nhớ : </strong></label>
            <input type="text" class="form-control" name="student_phone" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>SIM : </strong></label>
            <input type="text" class="form-control" name="student_phone" value="">
        </div>
        <div class="form-group">
            <label for=""><strong>Dung lượng pin : </strong></label>
            <input type="text" class="form-control" name="student_phone" value="">
        </div>

        <div class="text-center">
            <input class="btn btn-primary" name="submit" type="submit" value="submit" />
        </div>

    </div>
</form>

<!-- END: main -->