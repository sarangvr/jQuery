if (window.jQuery) {

    // on page load
    jQuery(document).ready(function() {

        // on menu click
        jQuery(".toggle-menu-item").click(function(event) {

            // helpers
            let togglegroup = jQuery(this).data("togglegroup");
            let toggleid = jQuery(this).data("toggleid");

            // deactivate all menu items
            jQuery('[data-togglegroup]').each(function() {
                let other_togglegroup = jQuery( this ).data("togglegroup");
                if(other_togglegroup.toString() === togglegroup.toString() && jQuery(this).data("toggleid") !== undefined){
                    jQuery( this ).addClass('toggle-menu-item-deactive');
                }

            });

            // activate clicked menu item
            jQuery( this ).removeClass('toggle-menu-item-deactive');

            // for each view
            jQuery('[data-toggleview]').each(function() {

                // helpers
                let toggleview = jQuery( this ).data("toggleview");
                let other_togglegroup = jQuery( this ).data("togglegroup");

                // if it belongs to the same group
                if(other_togglegroup.toString() === togglegroup.toString()){

                    // if view equals clicked id, then show, else hide
                    if(toggleview.toString() === toggleid.toString()){
                        jQuery( this ).addClass('d-block').removeClass('d-none');
                    }else {
                        jQuery( this ).addClass('d-none').removeClass('d-block');
                    }
                }

            });
        });
    });

}else{
    console.error("Oh no! You need jQuery for this lib to work.")
}
