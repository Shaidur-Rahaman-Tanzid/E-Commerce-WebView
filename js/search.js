var temp_data = [{ "name": "Intel Core i7-12700K", "brandid": "05e8302a-d454-4e73-bf6c-22991f6bd793", "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8", "brandname": "Intel", "productid": "b25900a0-a311-4d70-acc2-5411e52c6661", "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb", "vendorname": "Tech Supplies Ltd.", "description": "High performance CPU for gaming and productivity.", "final_price": 47000.00, "categoryname": "Electronics" }, { "name": "p1", "brandid": "da284414-e355-485e-bf83-3d0ac9d57ff0", "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8", "brandname": "Seagate", "productid": "e1b3aad6-6a51-43d4-8ac7-e255d32c6e03", "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44", "vendorname": "Tech Supplies Ltd.", "description": "ppp111", "final_price": 3750.00, "categoryname": "Accessories" }]


function render_filters(data){
    var cat_html = '';
    var brand_html = '';
    var vendor_html = '';
    var category_html = '';

    data.forEach(function(item){
        cat_html+=`<div class="input-checkbox">
            <input type="checkbox" id="${item.categoryid}">
            <label for="${item.categoryid}">
                <span></span>
                ${item.categoryname}
                <small>(${item.count})</small>
            </label>
        </div>`
    })

    document.getElementById('category-filter').innerHTML = cat_html;
}

render_filters(temp_data);
