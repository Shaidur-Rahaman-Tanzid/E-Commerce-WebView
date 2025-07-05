// Add random ratings for each product from 3 to 5
function getRandomRating() {
    // Generates a random float between 3 and 5, rounded to one decimal place
    return Math.round((Math.random() * 2 + 3) * 10) / 10;
}

const dataSource = {
    "count": 25,
    "brands": [
        {
            "count": 4,
            "brand_id": "05e8302a-d454-4e73-bf6c-22991f6bd793",
            "brandname": "Intel"
        },
        {
            "count": 3,
            "brand_id": "c60b7b1a-3e60-4b5c-80e6-ffffc401c0da",
            "brandname": "Nvidia"
        },
        {
            "count": 4,
            "brand_id": "3ade70e3-1652-46ee-b1f7-8dcb2ab91fcd",
            "brandname": "Corsair"
        },
        {
            "count": 5,
            "brand_id": "da284414-e355-485e-bf83-3d0ac9d57ff0",
            "brandname": "Seagate"
        },
        {
            "count": 3,
            "brand_id": "50a02b77-83e0-4b67-85c6-7f68c2e1a321",
            "brandname": "AMD"
        },
        {
            "count": 2,
            "brand_id": "1c8476fc-09f6-45b4-a30e-27a1c00bcb2d",
            "brandname": "Samsung"
        },
        {
            "count": 3,
            "brand_id": "d48fe9c2-c9f1-4899-9d38-bc4c2e8df35d",
            "brandname": "G.Skill"
        },
        {
            "count": 1,
            "brand_id": "5cd95e9f-d55a-4a7e-b110-402d5a6a2100",
            "brandname": "ASRock"
        }
        ,
        {
            "count": 2,
            "brand_id": "b8e1a2c3-4d5f-6789-abcd-ef0123456789",
            "brandname": "HP"
        }

    ],
    "vendors": [
        {
            "count": 7,
            "vendor_id": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "vendorname": "Tech Supplies Ltd."
        },
        {
            "count": 12,
            "vendor_id": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "vendorname": "Gadget World"
        },
        {
            "count": 6,
            "vendor_id": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "vendorname": "PC Parts Co."
        }
    ],
    "products": [
        // All products below have a random rating from 3 to 5
        {
            "brandid": "1c8476fc-09f6-45b4-a30e-27a1c00bcb2d",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "Samsung",
            "productid": "29a27a66-4bc2-49cf-a7fe-c96938a9cf28",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 8421.00,
            "salesprice": 9623.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "SATA SSD",
            "productname": "Samsung 870 EVO 1TB",
            "categoryname": "Accessories",
            "discountprice": 1202.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 7973.00,
            "productpriceid": "586c7582-4068-49ad-a12f-5a5b5f64319c",
            "warrantymonths": 36,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.60792+06:00",
            "product_updated_on": "2025-06-22T03:02:57.60792+06:00",
            "rating": 4.2,
            "stock": 30
        },
        {
            "brandid": "50a02b77-83e0-4b67-85c6-7f68c2e1a321",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "AMD",
            "productid": "b43fc810-570e-44e6-8b06-9c8f66781a05",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 18671.00,
            "salesprice": 20026.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "Solid 6-core processor",
            "productname": "AMD Ryzen 5 5600",
            "categoryname": "Electronics",
            "discountprice": 1355.00,
            "producttypeid": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "purchaseprice": 18729.00,
            "productpriceid": "412765ac-25a6-4df5-9bf6-f466a9100ef8",
            "warrantymonths": 36,
            "producttypename": "CPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.608713+06:00",
            "product_updated_on": "2025-06-22T03:02:57.608713+06:00",
            "rating": 4.7,
            "stock": 30
        },
        {
            "brandid": "b7e1e8c2-2c3a-4e7a-9b2d-1f2e3d4c5b6a", // Intel brand id (example)
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "Intel",
            "productid": "a1b2c3d4-e5f6-7890-abcd-1234567890ef", // new unique id
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb", // Electronics (GPU should be in Electronics)
            "finalprice": 29999.00,
            "salesprice": 32999.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "Intel Arc A750 8GB GDDR6 Graphics Card, PCIe 4.0, Ray Tracing, XeSS AI Upscaling.",
            "productname": "Intel Arc A750 8GB",
            "categoryname": "Electronics",
            "discountprice": 3000.00,
            "producttypeid": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f", // GPU type id (matches other GPUs)
            "purchaseprice": 28500.00,
            "productpriceid": "e7f8a9b0-c1d2-3456-7890-abcdef123456", // new unique id
            "warrantymonths": 36,
            "producttypename": "GPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T10:00:00.000000+06:00",
            "product_updated_on": "2025-06-22T10:00:00.000000+06:00",
            "rating": 4.1,
            "stock": 30
        },
        {
            "brandid": "da284414-e355-485e-bf83-3d0ac9d57ff0",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "Seagate",
            "productid": "b6cbecfd-42aa-4671-8fce-306c8e73a60a",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 3100.00,
            "salesprice": 3200.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "2TB HDD for storage needs.",
            "productname": "Seagate Barracuda 2TB",
            "categoryname": "Accessories",
            "discountprice": 100.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 3095.00,
            "productpriceid": "f7d777fc-b4b1-42b7-b269-65e134de53e3",
            "warrantymonths": 36,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-05-07T09:06:38.391795+06:00",
            "product_updated_on": "2025-05-07T09:06:38.391795+06:00",
            "rating": 4.0,
            "stock": 30
        },
        {
            "brandid": "c60b7b1a-3e60-4b5c-80e6-ffffc401c0da",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "Nvidia",
            "productid": "9e28460b-a754-4cb3-82f5-5689b17f1266",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 8225.00,
            "salesprice": 8745.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "High-end gaming GPU",
            "productname": "Nvidia RTX 3070",
            "categoryname": "Electronics",
            "discountprice": 520.00,
            "producttypeid": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f",
            "purchaseprice": 7375.00,
            "productpriceid": "20ec9aac-c182-44e4-b762-43f46237d73c",
            "warrantymonths": 24,
            "producttypename": "GPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.596395+06:00",
            "product_updated_on": "2025-06-22T03:02:57.596395+06:00",
            "rating": 4.5,
            "stock": 30
        },
        {
            "brandid": "05e8302a-d454-4e73-bf6c-22991f6bd793",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "Intel",
            "productid": "b25900a0-a311-4d70-acc2-5411e52c6661",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 47000.00,
            "salesprice": 50000.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "High performance CPU for gaming and productivity.",
            "productname": "Intel Core i7-12700K",
            "categoryname": "Electronics",
            "discountprice": 3000.00,
            "producttypeid": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "purchaseprice": 45000.00,
            "productpriceid": "f49189cc-f3b7-4dbb-9451-c1e9622728d3",
            "warrantymonths": 36,
            "producttypename": "CPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-05-07T09:06:38.391795+06:00",
            "product_updated_on": "2025-05-07T09:06:38.391795+06:00",
            "rating": 4.9,
            "stock": 30
        },
        {
            "brandid": "05e8302a-d454-4e73-bf6c-22991f6bd793",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "Intel",
            "productid": "13aa66b1-98c9-4b9e-9392-cd5c3a0c463a",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 3376.00,
            "salesprice": 4359.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "Entry-level Intel GPU",
            "productname": "Intel Arc A750",
            "categoryname": "Electronics",
            "discountprice": 983.00,
            "producttypeid": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f",
            "purchaseprice": 2977.00,
            "productpriceid": "bc9195bb-75e8-44a2-a97c-d1663168f49a",
            "warrantymonths": 36,
            "producttypename": "GPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.610094+06:00",
            "product_updated_on": "2025-06-22T03:02:57.610094+06:00",
            "rating": 3.9,
            "stock": 30
        },
        {
            "brandid": "d48fe9c2-c9f1-4899-9d38-bc4c2e8df35d",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "G.Skill",
            "productid": "4cbcb57c-269a-4340-83b5-da6c85548f3d",
            "categoryid": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "finalprice": 2397.00,
            "salesprice": 3763.00,
            "vendorname": "Gadget World",
            "description": "High-performance RAM",
            "productname": "G.Skill Ripjaws V 16GB",
            "categoryname": "Peripherals",
            "discountprice": 1366.00,
            "producttypeid": "86a9078b-30d3-4a1d-82d8-ee18e7a74857",
            "purchaseprice": 2668.00,
            "productpriceid": "f70a7fd9-7593-489c-acec-cde5d9dbd6ce",
            "warrantymonths": 24,
            "producttypename": "RAM",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.602272+06:00",
            "product_updated_on": "2025-06-22T03:02:57.602272+06:00",
            "rating": 4.3,
            "stock": 30
        },
        {
            "brandid": "d48fe9c2-c9f1-4899-9d38-bc4c2e8df35d",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "G.Skill",
            "productid": "04e1b271-4644-49ee-8bd9-7a443d47e242",
            "categoryid": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "finalprice": 2535.00,
            "salesprice": 3122.00,
            "vendorname": "Gadget World",
            "description": "Budget DDR4 stick",
            "productname": "G.Skill Aegis 8GB",
            "categoryname": "Peripherals",
            "discountprice": 587.00,
            "producttypeid": "86a9078b-30d3-4a1d-82d8-ee18e7a74857",
            "purchaseprice": 1596.00,
            "productpriceid": "0f200b52-1745-4542-a577-7aa125f05253",
            "warrantymonths": 12,
            "producttypename": "RAM",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.611483+06:00",
            "product_updated_on": "2025-06-22T03:02:57.611483+06:00",
            "rating": 3.7,
            "stock": 30
        },
        {
            "brandid": "1c8476fc-09f6-45b4-a30e-27a1c00bcb2d",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Samsung",
            "productid": "a2e5b9d2-84b2-4cab-9538-3df546ff5181",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 6214.00,
            "salesprice": 7282.00,
            "vendorname": "Gadget World",
            "description": "NVMe SSD for enthusiasts",
            "productname": "Samsung 980 Pro 1TB",
            "categoryname": "Accessories",
            "discountprice": 1068.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 5835.00,
            "productpriceid": "5f3fb23c-8602-4195-a37a-311c4b186d1a",
            "warrantymonths": 12,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.599668+06:00",
            "product_updated_on": "2025-06-22T03:02:57.599668+06:00",
            "rating": 4.6,
            "stock": 30
        },
        {
            "brandid": "50a02b77-83e0-4b67-85c6-7f68c2e1a321",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "AMD",
            "productid": "b6a56420-607c-4c18-837a-96ab2e0a3cd1",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 13384.00,
            "salesprice": 14088.00,
            "vendorname": "Gadget World",
            "description": "8-core powerhouse CPU",
            "productname": "AMD Ryzen 7 5800X",
            "categoryname": "Electronics",
            "discountprice": 704.00,
            "producttypeid": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "purchaseprice": 13095.00,
            "productpriceid": "f7d777fc-b4b1-42b7-b269-65e134de53e0",
            "warrantymonths": 36,
            "producttypename": "CPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:44.647057+06:00",
            "product_updated_on": "2025-06-22T03:02:44.647057+06:00",
            "rating": 4.8,
            "stock": 30
        },
        {
            "brandid": "50a02b77-83e0-4b67-85c6-7f68c2e1a321",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "AMD",
            "productid": "2c1e21c1-d6e0-4c0d-8ecd-28b3b4e5110f",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 4426.00,
            "salesprice": 4963.00,
            "vendorname": "Gadget World",
            "description": "Strong 1440p GPU",
            "productname": "AMD Radeon RX 6800",
            "categoryname": "Electronics",
            "discountprice": 537.00,
            "producttypeid": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f",
            "purchaseprice": 3614.00,
            "productpriceid": "ca22e7df-cb63-45f9-a40c-e986f3428b39",
            "warrantymonths": 12,
            "producttypename": "GPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.603647+06:00",
            "product_updated_on": "2025-06-22T03:02:57.603647+06:00",
            "rating": 4.1,
            "stock": 30
        },
        {
            "brandid": "da284414-e355-485e-bf83-3d0ac9d57ff0",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Seagate",
            "productid": "b7b409a0-a368-4852-8480-d22e2fa4628b",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 5019.00,
            "salesprice": 6255.00,
            "vendorname": "Gadget World",
            "description": "Reliable HDD storage",
            "productname": "Seagate Barracuda 2TB",
            "categoryname": "Accessories",
            "discountprice": 1236.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 4327.00,
            "productpriceid": "c0c26631-87e4-411e-9cf0-8c71e15e6b95",
            "warrantymonths": 36,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.602953+06:00",
            "product_updated_on": "2025-06-22T03:02:57.602953+06:00",
            "rating": 3.6,
            "stock": 30
        },
        {
            "brandid": "da284414-e355-485e-bf83-3d0ac9d57ff0",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Seagate",
            "productid": "ae78812b-4d69-47bf-888f-fd6dec83de92",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 53077.00,
            "salesprice": 53888.00,
            "vendorname": "Gadget World",
            "description": "Reliable storage",
            "productname": "WD Blue 1TB HDD",
            "categoryname": "Accessories",
            "discountprice": 811.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 52724.00,
            "productpriceid": "49a2ddc3-8938-4b2d-bb6e-1596279da63f",
            "warrantymonths": 12,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.605163+06:00",
            "product_updated_on": "2025-06-22T03:02:57.605163+06:00",
            "rating": 4.4,
            "stock": 30
        },
        {
            "brandid": "da284414-e355-485e-bf83-3d0ac9d57ff0",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Seagate",
            "productid": "263bd0d9-155d-47f9-b0bd-c8aa6cd96e2d",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 3641.00,
            "salesprice": 4835.00,
            "vendorname": "Gadget World",
            "description": "Budget NVMe SSD",
            "productname": "Kingston NV2 1TB",
            "categoryname": "Accessories",
            "discountprice": 1194.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 2868.00,
            "productpriceid": "1eb4b7ee-603f-41ee-b6aa-66553517cf2f",
            "warrantymonths": 12,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.609443+06:00",
            "product_updated_on": "2025-06-22T03:02:57.609443+06:00",
            "rating": 3.5,
            "stock": 30
        },
        {
            "brandid": "3ade70e3-1652-46ee-b1f7-8dcb2ab91fcd",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Corsair",
            "productid": "3347867e-cc76-458d-ba37-130bd0a93b41",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 45988.00,
            "salesprice": 46728.00,
            "vendorname": "Gadget World",
            "description": "High-end liquid cooler",
            "productname": "Corsair H100i Cooler",
            "categoryname": "Accessories",
            "discountprice": 740.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 45628.00,
            "productpriceid": "20e338e8-9d37-43f1-b4ea-161afa7e0090",
            "warrantymonths": 36,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.606001+06:00",
            "product_updated_on": "2025-06-22T03:02:57.606001+06:00",
            "rating": 4.0,
            "stock": 30
        },
        {
            "brandid": "c60b7b1a-3e60-4b5c-80e6-ffffc401c0da",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Nvidia",
            "productid": "4afeb6ab-c744-415d-934a-e210268c300a",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 23384.00,
            "salesprice": 24088.00,
            "vendorname": "Gadget World",
            "description": "High-end GPU for gaming and content creation.",
            "productname": "Nvidia GeForce RTX 3080",
            "categoryname": "Electronics",
            "discountprice": 704.00,
            "producttypeid": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f",
            "purchaseprice": 23095.00,
            "productpriceid": "f7d777fc-b4b1-42b7-b269-65e134de53e1",
            "warrantymonths": 24,
            "producttypename": "GPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-05-07T09:06:38.391795+06:00",
            "product_updated_on": "2025-05-07T09:06:38.391795+06:00",
            "rating": 4.5,
            "stock": 30
        },
        {
            "brandid": "c60b7b1a-3e60-4b5c-80e6-ffffc401c0da",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Nvidia",
            "productid": "e3aa4b04-1ba0-4bd5-934f-e838ae0c9c24",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 14996.00,
            "salesprice": 15588.00,
            "vendorname": "Gadget World",
            "description": "Next-gen budget GPU",
            "productname": "Nvidia RTX 4060",
            "categoryname": "Electronics",
            "discountprice": 592.00,
            "producttypeid": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f",
            "purchaseprice": 13852.00,
            "productpriceid": "00967c8c-c819-4a29-ac05-79ac263d62c7",
            "warrantymonths": 24,
            "producttypename": "GPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.607305+06:00",
            "product_updated_on": "2025-06-22T03:02:57.607305+06:00",
            "rating": 3.8,
            "stock": 30
        },
        {
            "brandid": "05e8302a-d454-4e73-bf6c-22991f6bd793",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "Intel",
            "productid": "caa935e4-93f6-408b-9579-56bdc7922e1f",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 1097.00,
            "salesprice": 2471.00,
            "vendorname": "Gadget World",
            "description": "Best value Intel CPU",
            "productname": "Intel Core i5-12600K",
            "categoryname": "Electronics",
            "discountprice": 1374.00,
            "producttypeid": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "purchaseprice": 1087.00,
            "productpriceid": "cce9a2b4-80ec-4865-910c-b8e3b0ed6f9e",
            "warrantymonths": 24,
            "producttypename": "CPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.604393+06:00",
            "product_updated_on": "2025-06-22T03:02:57.604393+06:00",
            "rating": 4.2,
            "stock": 30
        },
        {
            "brandid": "5cd95e9f-d55a-4a7e-b110-402d5a6a2100",
            "vendorid": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "brandname": "ASRock",
            "productid": "edc2cc86-c64b-4fdb-b541-11f93451ce26",
            "categoryid": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "finalprice": 21742.00,
            "salesprice": 22719.00,
            "vendorname": "PC Parts Co.",
            "description": "Affordable AMD motherboard",
            "productname": "ASRock B550M Pro4",
            "categoryname": "Peripherals",
            "discountprice": 977.00,
            "producttypeid": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "purchaseprice": 20727.00,
            "productpriceid": "c2c9174e-e893-4aad-98e7-c134d280e9d4",
            "warrantymonths": 12,
            "producttypename": "CPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.601424+06:00",
            "product_updated_on": "2025-06-22T03:02:57.601424+06:00",
            "rating": 3.9,
            "stock": 30
        },
        {
            "brandid": "d48fe9c2-c9f1-4899-9d38-bc4c2e8df35d",
            "vendorid": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "brandname": "G.Skill",
            "productid": "b74bf601-8188-4919-80ba-e03e510a5cc7",
            "categoryid": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "finalprice": 11764.00,
            "salesprice": 12639.00,
            "vendorname": "PC Parts Co.",
            "description": "Premium RGB RAM",
            "productname": "G.Skill Trident Z RGB 32GB",
            "categoryname": "Peripherals",
            "discountprice": 875.00,
            "producttypeid": "86a9078b-30d3-4a1d-82d8-ee18e7a74857",
            "purchaseprice": 10921.00,
            "productpriceid": "9dac2b82-fc45-4c12-a669-e29c67acc368",
            "warrantymonths": 24,
            "producttypename": "RAM",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.606648+06:00",
            "product_updated_on": "2025-06-22T03:02:57.606648+06:00",
            "rating": 4.6,
            "stock": 30
        },
        {
            "brandid": "3ade70e3-1652-46ee-b1f7-8dcb2ab91fcd",
            "vendorid": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "brandname": "Corsair",
            "productid": "5668908b-d66e-4b20-91a2-23f06b9c608c",
            "categoryid": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "finalprice": 13384.00,
            "salesprice": 14088.00,
            "vendorname": "PC Parts Co.",
            "description": "16GB DDR4 RAM for high-speed performance.",
            "productname": "Corsair Vengeance LPX 16GB",
            "categoryname": "Peripherals",
            "discountprice": 704.00,
            "producttypeid": "86a9078b-30d3-4a1d-82d8-ee18e7a74857",
            "purchaseprice": 13095.00,
            "productpriceid": "f7d777fc-b4b1-42b7-b269-65e134de53e2",
            "warrantymonths": 12,
            "producttypename": "RAM",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-05-07T09:06:38.391795+06:00",
            "product_updated_on": "2025-05-07T09:06:38.391795+06:00",
            "rating": 4.4,
            "stock": 30
        },
        {
            "brandid": "3ade70e3-1652-46ee-b1f7-8dcb2ab91fcd",
            "vendorid": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "brandname": "Corsair",
            "productid": "9e5948fa-d298-48e0-aac5-a9eab1123e33",
            "categoryid": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "finalprice": 10487.00,
            "salesprice": 11187.00,
            "vendorname": "PC Parts Co.",
            "description": "Fast DDR4 memory kit",
            "productname": "Corsair Vengeance 16GB",
            "categoryname": "Peripherals",
            "discountprice": 700.00,
            "producttypeid": "86a9078b-30d3-4a1d-82d8-ee18e7a74857",
            "purchaseprice": 9581.00,
            "productpriceid": "7f344e3a-75da-4704-b971-ab55c8d7cbbc",
            "warrantymonths": 12,
            "producttypename": "RAM",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.600572+06:00",
            "product_updated_on": "2025-06-22T03:02:57.600572+06:00",
            "rating": 3.8,
            "stock": 30
        },
        {
            "brandid": "3ade70e3-1652-46ee-b1f7-8dcb2ab91fcd",
            "vendorid": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "brandname": "Corsair",
            "productid": "58b7100b-c04b-491b-88e4-2f093fc3ffc3",
            "categoryid": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "finalprice": 4508.00,
            "salesprice": 5435.00,
            "vendorname": "PC Parts Co.",
            "description": "750W power supply",
            "productname": "Corsair RM750x PSU",
            "categoryname": "Accessories",
            "discountprice": 927.00,
            "producttypeid": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "purchaseprice": 3600.00,
            "productpriceid": "e287cc26-3f75-418d-9174-9b2d7f398f0f",
            "warrantymonths": 36,
            "producttypename": "Storage",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.610734+06:00",
            "product_updated_on": "2025-06-22T03:02:57.610734+06:00",
            "rating": 4.1,
            "stock": 30
        },
        {
            "brandid": "05e8302a-d454-4e73-bf6c-22991f6bd793",
            "vendorid": "6af8e6b3-5357-4fcc-a5a4-01b89d9d7513",
            "brandname": "Intel",
            "productid": "90ab1bc6-4810-4b13-8aaf-e619282c0e3c",
            "categoryid": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "finalprice": 52765.00,
            "salesprice": 53834.00,
            "vendorname": "PC Parts Co.",
            "description": "Flagship 12th Gen CPU",
            "productname": "Intel Core i9-12900K",
            "categoryname": "Electronics",
            "discountprice": 1069.00,
            "producttypeid": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "purchaseprice": 52552.00,
            "productpriceid": "0724746d-0071-4fe1-9722-f5581e276aa4",
            "warrantymonths": 36,
            "producttypename": "CPU",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:41.933521+06:00",
            "product_updated_on": "2025-06-22T03:02:41.933521+06:00",
            "rating": 4.9,
            "stock": 30
        },
        {
            "brandid": "b8e1a2c3-4d5f-6789-abcd-ef0123456789",
            "vendorid": "3aea15b7-13f7-4f42-b7c1-d6eff16c678e",
            "brandname": "HP",
            "productid": "e1a2b3c4-d5f6-7890-abcd-ef01234567aa",
            "categoryid": "b1e2c3d4-5678-4abc-9def-1234567890ab",
            "finalprice": 65000.00,
            "salesprice": 70000.00,
            "vendorname": "Gadget World",
            "description": "HP Pavilion 15, 11th Gen Intel Core i5, 8GB RAM, 512GB SSD",
            "productname": "HP Pavilion 15",
            "categoryname": "Laptops",
            "discountprice": 5000.00,
            "producttypeid": "b7e2f8c1-3d4a-4e2a-9c1f-2a6b7e8c9d0f",
            "purchaseprice": 63000.00,
            "productpriceid": "a1b2c3d4-e5f6-7890-abcd-ef01234567aa",
            "warrantymonths": 24,
            "producttypename": "Device",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.700000+06:00",
            "product_updated_on": "2025-06-22T03:02:57.700000+06:00",
            "rating": 4.4,
            "stock": 30
        },
        {
            "brandid": "b8e1a2c3-4d5f-6789-abcd-ef0123456789",
            "vendorid": "7a9026b9-4ee2-4636-862a-1a4ccbe896a8",
            "brandname": "HP",
            "productid": "e1a2b3c4-d5f6-7890-abcd-ef01234567bb",
            "categoryid": "b1e2c3d4-5678-4abc-9def-1234567890ab",
            "finalprice": 85000.00,
            "salesprice": 90000.00,
            "vendorname": "Tech Supplies Ltd.",
            "description": "HP Spectre x360, 13th Gen Intel Core i7, 16GB RAM, 1TB SSD",
            "productname": "HP Spectre x360",
            "categoryname": "Laptops",
            "discountprice": 5000.00,
            "producttypeid": "b7e2f8c1-3d4a-4e2a-9c1f-2a6b7e8c9d0f",
            "purchaseprice": 82000.00,
            "productpriceid": "a1b2c3d4-e5f6-7890-abcd-ef01234567bb",
            "warrantymonths": 36,
            "producttypename": "Device",
            "priceeffectiveto": "2025-12-30T00:00:00+06:00",
            "priceeffectivefrom": "2025-05-13T00:00:00+06:00",
            "product_created_on": "2025-06-22T03:02:57.800000+06:00",
            "product_updated_on": "2025-06-22T03:02:57.800000+06:00",
            "rating": 4.7,
            "stock": 30
        },
        
    ],
    "categories": [
        {
            "count": 10,
            "category_id": "4e3ae1a8-7cdb-4736-acb0-b01ac856f4cb",
            "categoryname": "Electronics"
        },
        {
            "count": 6,
            "category_id": "a699d8eb-2cfe-45b1-a7e6-e6f41bb73d24",
            "categoryname": "Peripherals"
        },
        {
            "count": 9,
            "category_id": "d32721e7-21b6-4b80-878b-a9939ea93e44",
            "categoryname": "Accessories"
        }
        ,
        {
            "count": 2,
            "category_id": "b1e2c3d4-5678-4abc-9def-1234567890ab",
            "categoryname": "Laptops"
        }
    ],
    "productTypes": [
        {
            "count": 6,
            "product_type_id": "c65d108e-1ce1-4d79-9012-a7a605d08604",
            "producttypename": "CPU"
        },
        {
            "count": 6,
            "product_type_id": "95d38a76-1e78-46bc-a2f5-aaef69cf8e7f",
            "producttypename": "GPU"
        },
        {
            "count": 5,
            "product_type_id": "86a9078b-30d3-4a1d-82d8-ee18e7a74857",
            "producttypename": "RAM"
        },
        {
            "count": 8,
            "product_type_id": "42cfaa86-c9c9-4c31-b009-06ebc8866d7b",
            "producttypename": "Storage"
        },
        {
            "count": 2,
            "product_type_id": "b7e2f8c1-3d4a-4e2a-9c1f-2a6b7e8c9d0f",
            "producttypename": "Device"
        }
    ]
};

var users = [
    {
        id: 1,
        email: "admin@example.com",
        password: "admin123", // In production, passwords should be hashed!
        role: "admin",
        userName: "System Administrator",
        phone: "+8801706782347",
        address: "123 Admin Street, Rajshahi",
        createdAt: "2023-01-15T10:00:00Z",
        wishlist: [], // Array of product IDs
        cartItems: [] // Array of { productId, quantity, addedAt }
    },
    {
        id: 2,
        email: "sahidtanzid2014@gmail.com",
        password: "user123",
        role: "user",
        userName: "Sahid Tanzid",
        phone: "+8801706782347",
        address: "456 Main Street, Rajshahi",
        createdAt: "2023-03-20T08:30:00Z",
        wishlist: [],
        cartItems: []
    },
    {
        id: 3,
        email: "user2@example.com",
        password: "user456",
        role: "user",
        userName: "John Smith",
        phone: "+8801987654321",
        address: "789 Tech Avenue, Dhaka",
        createdAt: "2023-05-10T16:45:00Z",
        wishlist: [],
        cartItems: []
    },
    {
        id: 4,
        email: "user3@example.com",
        password: "user789",
        role: "user",
        userName: "Maria Garcia",
        phone: "+8801555666777",
        address: "321 Computer Lane, Chittagong",
        createdAt: "2023-07-25T12:15:00Z",
        wishlist: [],
        cartItems: []
    },
    {
        id: 5,
        email: "user4@example.com",
        password: "user101",
        role: "user",
        userName: "Ahmed Hassan",
        phone: "+8801444333222",
        address: "654 Gaming Plaza, Sylhet",
        createdAt: "2023-09-12T14:20:00Z",
        wishlist: [],
        cartItems: []
    }
];

// Orders array: each order has an id, userId (who purchased), orderDate, total, and items array
// Each item has productId, quantity, priceAtPurchase
var orders = [
    {
        orderId: 1,
        userId: 2, // user1@example.com
        orderDate: "2024-06-10T14:23:00Z",
        total: 26846.00,
        status: "delivered",
        paymentType: "bkash",
        transactionNo: "TXN1001",
        paymentTimestamp: "2024-06-10T14:24:00Z",
        items: [
            {
                productId: "29a27a66-4bc2-49cf-a7fe-c96938a9cf28", // Samsung 870 EVO 1TB
                quantity: 1,
                priceAtPurchase: 8421.00
            },
            {
                productId: "b6cbecfd-42aa-4671-8fce-306c8e73a60a", // Seagate Barracuda 2TB
                quantity: 2,
                priceAtPurchase: 3100.00
            }
        ]
    },
    {
        orderId: 2,
        userId: 3, // user2@example.com
        orderDate: "2024-06-11T09:10:00Z",
        total: 8225.00,
        status: "pending",
        paymentType: "nagad",
        transactionNo: "TXN1002",
        paymentTimestamp: "2024-06-11T09:11:00Z",
        items: [
            {
                productId: "9e28460b-a754-4cb3-82f5-5689b17f1266", // Nvidia RTX 3070
                quantity: 1,
                priceAtPurchase: 8225.00
            }
        ]
    },
    {
        orderId: 3,
        userId: 2,
        orderDate: "2024-06-12T12:00:00Z",
        total: 47000.00,
        status: "cancelled",
        paymentType: "bkash",
        transactionNo: "TXN1003",
        paymentTimestamp: "2024-06-12T12:01:00Z",
        items: [
            {
                productId: "b25900a0-a311-4d70-acc2-5411e52c6661", // Intel Core i7-12700K
                quantity: 1,
                priceAtPurchase: 47000.00
            }
        ]
    },
    {
        orderId: 4,
        userId: 3,
        orderDate: "2024-06-13T15:30:00Z",
        total: 9300.00,
        status: "delivered",
        paymentType: "nagad",
        transactionNo: "TXN1004",
        paymentTimestamp: "2024-06-13T15:31:00Z",
        items: [
            {
                productId: "b6cbecfd-42aa-4671-8fce-306c8e73a60a", // Seagate Barracuda 2TB
                quantity: 3,
                priceAtPurchase: 3100.00
            }
        ]
    },
    {
        orderId: 5,
        userId: 2,
        orderDate: "2024-06-14T10:45:00Z",
        total: 3100.00,
        status: "pending",
        paymentType: "bkash",
        transactionNo: "TXN1005",
        paymentTimestamp: "2024-06-14T10:46:00Z",
        items: [
            {
                productId: "b6cbecfd-42aa-4671-8fce-306c8e73a60a", // Seagate Barracuda 2TB
                quantity: 1,
                priceAtPurchase: 3100.00
            }
        ]
    },
    {
        orderId: 6,
        userId: 3,
        orderDate: "2024-06-15T08:20:00Z",
        total: 8421.00,
        status: "delivered",
        paymentType: "nagad",
        transactionNo: "TXN1006",
        paymentTimestamp: "2024-06-15T08:21:00Z",
        items: [
            {
                productId: "29a27a66-4bc2-49cf-a7fe-c96938a9cf28", // Samsung 870 EVO 1TB
                quantity: 1,
                priceAtPurchase: 8421.00
            }
        ]
    },
    {
        orderId: 7,
        userId: 2,
        orderDate: "2024-06-16T17:00:00Z",
        total: 8225.00,
        status: "cancelled",
        paymentType: "bkash",
        transactionNo: "TXN1007",
        paymentTimestamp: "2024-06-16T17:01:00Z",
        items: [
            {
                productId: "9e28460b-a754-4cb3-82f5-5689b17f1266", // Nvidia RTX 3070
                quantity: 1,
                priceAtPurchase: 8225.00
            }
        ]
    },
    {
        orderId: 8,
        userId: 3,
        orderDate: "2024-06-17T13:15:00Z",
        total: 19746.00,
        status: "pending",
        paymentType: "nagad",
        transactionNo: "TXN1008",
        paymentTimestamp: "2024-06-17T13:16:00Z",
        items: [
            {
                productId: "29a27a66-4bc2-49cf-a7fe-c96938a9cf28", // Samsung 870 EVO 1TB
                quantity: 1,
                priceAtPurchase: 8421.00
            },
            {
                productId: "b6cbecfd-42aa-4671-8fce-306c8e73a60a", // Seagate Barracuda 2TB
                quantity: 1,
                priceAtPurchase: 3100.00
            },
            {
                productId: "4cbcb57c-269a-4340-83b5-da6c85548f3d", // G.Skill Ripjaws V 16GB
                quantity: 1,
                priceAtPurchase: 2397.00
            }
        ]
    },
    {
        orderId: 9,
        userId: 2,
        orderDate: "2024-06-18T11:40:00Z",
        total: 3100.00,
        status: "delivered",
        paymentType: "bkash",
        transactionNo: "TXN1009",
        paymentTimestamp: "2024-06-18T11:41:00Z",
        items: [
            {
                productId: "b6cbecfd-42aa-4671-8fce-306c8e73a60a", // Seagate Barracuda 2TB
                quantity: 1,
                priceAtPurchase: 3100.00
            }
        ]
    },
    {
        orderId: 10,
        userId: 3,
        orderDate: "2024-06-19T09:55:00Z",
        total: 8225.00,
        status: "pending",
        paymentType: "nagad",
        transactionNo: "TXN1010",
        paymentTimestamp: "2024-06-19T09:56:00Z",
        items: [
            {
                productId: "9e28460b-a754-4cb3-82f5-5689b17f1266", // Nvidia RTX 3070
                quantity: 1,
                priceAtPurchase: 8225.00
            }
        ]
    },
    {
        orderId: 11,
        userId: 2,
        orderDate: "2024-06-20T16:10:00Z",
        total: 8421.00,
        status: "delivered",
        paymentType: "bkash",
        transactionNo: "TXN1011",
        paymentTimestamp: "2024-06-20T16:11:00Z",
        items: [
            {
                productId: "29a27a66-4bc2-49cf-a7fe-c96938a9cf28", // Samsung 870 EVO 1TB
                quantity: 1,
                priceAtPurchase: 8421.00
            }
        ]
    },
    {
        orderId: 12,
        userId: 3,
        orderDate: "2024-06-21T14:05:00Z",
        total: 9300.00,
        status: "cancelled",
        paymentType: "nagad",
        transactionNo: "TXN1012",
        paymentTimestamp: "2024-06-21T14:06:00Z",
        items: [
            {
                productId: "b6cbecfd-42aa-4671-8fce-306c8e73a60a", // Seagate Barracuda 2TB
                quantity: 3,
                priceAtPurchase: 3100.00
            }
        ]
    }
];

// Make users and orders globally accessible
window.users = users;
window.orders = orders;
window.dataSource = dataSource;

const STORAGE_KEYS = {
    USERS: 'pc_shop__users',
    ALL_PRODUCTS: 'pc_shop__all_products',
    ORDERS: 'pc_shop__orders',
    CURRENT_USER: 'pc_shop__current_user'   
};

// Helper functions for ALL_PRODUCTS (products array in dataSource)
function getAllProductsFromStorage() {
    const productsStr = localStorage.getItem(STORAGE_KEYS.ALL_PRODUCTS);
    if (productsStr) {
        try {
            return JSON.parse(productsStr);
        } catch (e) {
            return dataSource.products || [];
        }
    }
    return dataSource.products || [];
}

function saveAllProductsToStorage(productsArr) {
    localStorage.setItem(STORAGE_KEYS.ALL_PRODUCTS, JSON.stringify(productsArr));
}

function addProductToStorage(product) {
    let productsArr = getAllProductsFromStorage();
    productsArr.push(product);
    saveAllProductsToStorage(productsArr);
}

function updateProductInStorage(updatedProduct) {
    let productsArr = getAllProductsFromStorage();
    const idx = productsArr.findIndex(p => p.productid === updatedProduct.productid);
    if (idx !== -1) {
        productsArr[idx] = updatedProduct;
        saveAllProductsToStorage(productsArr);
    }
}

function removeProductFromStorage(productId) {
    let productsArr = getAllProductsFromStorage();
    productsArr = productsArr.filter(p => p.productid !== productId);
    saveAllProductsToStorage(productsArr);
}


// Helper functions for current user id
function setCurrentUserId(id) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, id);
}
function getCurrentUserId() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
}
function removeCurrentUserId() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

// Utility functions for user management
function getUsersFromStorage() {
    const usersStr = localStorage.getItem(STORAGE_KEYS.USERS);
    if (usersStr) {
        try {
            return JSON.parse(usersStr);
        } catch (e) {
            return users;
        }
    }
    return users;
}

function updateUser(user) {
    let usersArr = getUsersFromStorage();
    const idx = usersArr.findIndex(u => u.id == user.id);
    if (idx !== -1) {
        usersArr[idx] = user;
        saveUsersToStorage(usersArr);
    }
}
function saveUsersToStorage(usersArr) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(usersArr));
}
function getCurrentUser() {
    const userKey = getCurrentUserId();
    if (!userKey) return null;
    const usersArr = getUsersFromStorage();
    // userKey can be id or email
    let user = usersArr.find(u => u.id == userKey || u.email == userKey);
    return user || null;
}
function setCurrentUser(user) {
    // Update the user in users array and save
    let usersArr = getUsersFromStorage();
    const idx = usersArr.findIndex(u => u.id == user.id);
    if (idx !== -1) {
        usersArr[idx] = user;
        saveUsersToStorage(usersArr);
    }
    setCurrentUserId(user.id);
}

// Order helper functions

function getOrdersFromStorage() {
    const ordersStr = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (ordersStr) {
        try {
            return JSON.parse(ordersStr);
        } catch (e) {
            return orders;
        }
    }
    return orders;
}

function saveOrdersToStorage(ordersArr) {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(ordersArr));
}

function getOrdersByUserId(userId) {
    const ordersArr = getOrdersFromStorage();
    return ordersArr.filter(order => order.userId == userId);
}

function addOrder(order) {
    let ordersArr = getOrdersFromStorage();
    // Assign a new orderId if not present
    if (!order.orderId) {
        const maxId = ordersArr.length > 0 ? Math.max(...ordersArr.map(o => o.orderId || 0)) : 0;
        order.orderId = maxId + 1;
    }
    ordersArr.push(order);
    saveOrdersToStorage(ordersArr);
    return order.orderId;
}

function getOrderById(orderId) {
    const ordersArr = getOrdersFromStorage();
    return ordersArr.find(order => order.orderId == orderId) || null;
}

function updateOrder(order) {
    let ordersArr = getOrdersFromStorage();
    const idx = ordersArr.findIndex(o => o.orderId == order.orderId);
    if (idx !== -1) {
        ordersArr[idx] = order;
        saveOrdersToStorage(ordersArr);
        return true;
    }
    return false;
}

function deleteOrder(orderId) {
    let ordersArr = getOrdersFromStorage();
    const newOrders = ordersArr.filter(order => order.orderId != orderId);
    saveOrdersToStorage(newOrders);
    return newOrders.length !== ordersArr.length;
}




