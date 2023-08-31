exports.findAllItems = () => {

    return `
    SELECT 
    A.ITEM_NO
  , A.ITEM_NAME
  , A.ITEM_DISASSEMBLY
  , A.ITEM_DESCRIPTION
  , C.MATERIAL_NAME
FROM RECYCLEITEM_TB A
LEFT JOIN RECYCLEITEMBYMATERIAL_TB B ON A.ITEM_NO = B.ITEM_NO
LEFT JOIN MATERIAL_TB C ON B.MATERIAL_NO = C.MATERIAL_NO;
    `;
};