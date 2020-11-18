<!-- BEGIN: main -->
{FILE "header_only.tpl"}
{FILE "header_extended.tpl"}
<div class="row">
    [HEADER]
</div>
<div class="row">
    <div class="col-md-24">
        [TOP]
        {MODULE_CONTENT}
        [BOTTOM]
        <div class="col-md-8">
        [BOTTOM1][BOTTOM2][BOTTOM3]
        </div>

    </div>
</div>
<div class="row">
    [FOOTER]
</div>
{FILE "footer_extended.tpl"}
{FILE "footer_only.tpl"}
<!-- END: main -->