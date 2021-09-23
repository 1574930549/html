<?php
$path = './images';
$pic = base64_image_content($base64_image,$path);   //图片路径
$type = str_replace('.','',strrchr($pic,'.'));        //获取图片的类型
$image = str_replace('data:image/png;base64,', '', $base64_image);        //base64转换
$image = str_replace(' ', '+', $image);
$image = base64_decode($image);
$img_url = Oss::ossUploadFile64($image,$type,$pic,'pSignatureImg');        //上传到oss上



//bases64图片保存到本地路径
$base64_image_content      base64图片
$path      保存图片

public function base64_image_content($base64_image_content,$path){
    //匹配出图片的格式
    if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
        $type = $result[2];
        $new_file = $path."/";
        if(!file_exists($new_file)){
            //检查是否有该文件夹，如果没有就创建，并给予最高权限
            mkdir($new_file, 0777,true);
        }
        $new_file = $new_file.microtime(true).rand(0,999).".{$type}";
        if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $base64_image_content)))){
            return $new_file;
        }else{
            return false;
        }
    }else{
        return false;
    }
}