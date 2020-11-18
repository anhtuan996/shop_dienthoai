<!-- BEGIN: main -->
<form
    action="{NV_BASE_ADMINURL}index.php?{NV_LANG_VARIABLE}={NV_LANG_DATA}&amp;{NV_NAME_VARIABLE}={MODULE_NAME}&amp;{NV_OP_VARIABLE}={OP}"
    method="post" enctype='multipart/form-data'>
    <input type="hidden" class="form-control" name="student_id" value="">

    <div class="container">
        <div class="form-group">
            <label for=""><strong>Tên Phụ kiện : </strong> </label>
            <input type="text" class="form-control" name="student_name" value="">
        </div>
        <div class="form-group">
            <label><strong>Image : </strong></label>
            <input type="file" name="avatar">
        </div>
        <div class="form-group">
            <label for=""><strong>Mô tả : </strong></label>
            <textarea class="form-control" rows="3"></textarea>
        </div>

        <div class="text-center">
            <input class="btn btn-primary" name="submit" type="submit" value="submit" />
        </div>

    </div>
</form>

<!-- END: main -->