<!-- BEGIN: main -->
<form
    action="{NV_BASE_ADMINURL}index.php?{NV_LANG_VARIABLE}={NV_LANG_DATA}&amp;{NV_NAME_VARIABLE}={MODULE_NAME}&amp;{NV_OP_VARIABLE}={OP}"
    method="post" enctype="multipart/form-data">
    <!--=======================-->
    <!--       UploadFile          -->
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="form-group">
                <label>File:</label>
                <input type="file" name="uploadfile">
            </div>
            <div class="form-group">
                <input style="width: 70px;" class="btn btn-primary" name="submit_upload" type="submit" value="Gửi" />
            </div>
        </div>
    </div>
    <!--       UploadFile          -->
    <!--=========================-->
</form>
<!-- END: main -->