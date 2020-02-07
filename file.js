let arrAdmin = [["admin", "admin1"], ["12345", "123456"]];
let login = function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username.trim() === '') {
        alert("Please input username.");
    }
    else if (password.trim() === '')
    {
        alert("Please input password.");
    } else
    {
        for (let i = 0; i <arrAdmin[0].length; i++) {
            if (username ===arrAdmin[0][i] && password ===arrAdmin[1][i]) {
                alert("Welcome " +arrAdmin[0][i] + "!");
                return window.location = "new.html";
            }
        }
        alert("Username or password is incorect.");
    }
};


let AppProducts = function () {
    this.listProducts = [
        ["Khẩu trang 3M N95\n","1.jpg","Thôngtin:<br>-Lớp than hoạt tính của khẩu trang N95 có khả năng loại bỏ tới 99% các loại vi khẩu từ dạng hạt nhỏ 0.3 micron, tương đương với hiệu quả sử dụng của các loại khẩu trang đặc chủng ngành y tế<br>" +
        "-Không bị tác động của độ ẩm không khí và trợ lực hô hấp được<br>" +
        "-Ứng dụng trong môi trường mài, chà nhám, mài, đóng gói, cắt hoặc trong môi trường không khí bị ô nhiễm<br>" +
        "-Thiết kế ôm sắt mặt, kín, gập chữ V, uốn cong với chuyển động miệng để nói chuyện và mở rộng để dễ dàng hít thở<br>" +
        "-Dây đeo chắc chắn, co dãn đàn hồi giúp người dùng thoải mái<br>" +
        "-Thời hạn sử dụng từ 10-14 ngày<br>"+
        "- Giá: 32.000/chiếc"],

        ["Khẩu trang N95 Unicharm\n","2..jpg","Thông tin:<br>-Là mẫu khẩu trang chống bụi Nhật Bản<br>"+
        "-Thiết kế 3D thông minh, ôm vừa vặn đường cong khuôn mặt, mang lại cảm giác thoải mái và dễ chịu cho người dùng<br>" +
        "-Sản phẩm không gây bí thở, đảm bảo giữ nhiệt và độ ẩm cho mũi và họng vào những ngày mùa đông<br>" +
        "-Cấu trúc lớp lọc đa lớp, có khả năng ngăn ngừa khói bụi, phấn hoa trong không khí. Bên cạnh đó nhờ cấu trúc đặc thù bạn thoải mái giao tiếp, đồng thời giúp phái đẹp giữ son môi không bị phai lem vào khẩu trang<br>" +
        "-Quai đeo làm từ chất liệu co giãn, mềm mại<br>"+
        "- Giá:119k/50chiếc"],

        ["Khẩu trang y tế ","3.jpg","Thông tin:<br>-La loại khẩu trang phổ biến thông dụng và rẻ tiền<br>"+
        "-Ngăn bụi, ngăn hóa chất (kể cả khói xe) và ngăn vi sinh vật<br>" +
        "-Khẩu trang ngăn vi sinh vật phải được sản xuất bằng những nguyên liệu và công nghệ đặc biệi<br>" +
        " -Một trong những biện pháp hiệu quả và đơn giản để phòng dịch cúm là dùng khẩu trang vừa có tác dụng che bụi vừa có tác dụng ngăn ngừa lây nhiễm<br>"+
        "-Giá :5k/chiếc"],

    ];

    this.setLocalStorageListProducts = function () {
        sessionStorage.listProducts = JSON.stringify(this.listProducts);
    };
    this.getLocalStorageListProducts = function () {
        this.listProducts = JSON.parse(sessionStorage.listProducts);
    };
    this.displayProductsAdmin = function () {
        this.getLocalStorageListProducts();
        let sout = '';
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 50px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 100px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="300" height="300" ></td>';
            sout = sout + '<td>' +this.listProducts[i][2]  +'</td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Sửa tên" onclick="editProduct(' + i + ')"></input></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Sửa ảnh" onclick="editProductImg(' + i + ')"></input></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Sửa thông tin" onclick="editProductInf(' + i + ')"></input></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Xóa " onclick="deleteProduct(' + i + ')"></input></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result0").innerHTML = sout;
    };

    this.editProduct = function (i) {
        let temp = prompt(" Nhập tên muốn sửa: ");
        if (temp.trim() === "") {
            alert("Vui lòng nhập vào tên sản phẩm ");
            return;

        }
        this.listProducts[i][0] = temp;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    };
    this.editProductImg=function (i) {
        let link= prompt("Nhập link ảnh muốn sửa ");
        if(link.trim() ===""){
            alert("Vui lòng nhập vào link ảnh ");
            return;
        }
        this.listProducts[i][1]=link;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();

    };
    this.editProductInf=function (i) {
        let info=prompt("nhập thông tin");
        if(info.trim()==="") {
            alert("Vui lòng nhập vào thông tin sản phẩm");
            return;

        }
        this.listProducts[i][2]=info;
        this.setLocalStorageListProducts();
        this.displayProductsAdmin();

    };



    this.deleteProduct = function (i) {
        let confirmAnswer = confirm(" Bạn muốn xóa " + this.listProducts[i][0] + " ?");
        if (confirmAnswer) {
            let arr1 = [];
            let x = 0;
            while (x < this.listProducts.length) {
                if (x == i) {
                    x++;
                    continue;
                } else {
                    arr1.push(this.listProducts[x]);
                    x++;
                }
            }
            this.listProducts = arr1;
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();
        } else {
            return;
        }
    };
    this.addProduct = function () {
        let product = document.getElementById("newProduct").value;
        let imgs = document.getElementById("imgProduct").value;
        let sll = document.getElementById("sllProduct").value;
        if (product === "") {
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Tiêu Đề";
        } else if (imgs === "") {
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Đường Dẫn";
        } else if(sll === ""){
            document.getElementById("show").innerHTML = "Vui Lòng Nhập thông tin";
        } else {
            this.listProducts.push([product, imgs, sll,]);
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();

        }
    };


};

function editProduct(i) {
    return pro.editProduct(i);
}
function editProductImg(i) {
    return pro.editProductImg(i);

}
function editProductInf(i) {
    return pro.editProductInf(i);

}

function deleteProduct(i) {
    return pro.deleteProduct(i);
}
function repairProduct() {
    return pro.displayProductsAdmin();
}
function open() {
    pro.setLocalStorageListProducts();
    pro.displayProductsAdmin();

}
let pro = new AppProducts();
