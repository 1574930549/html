<?php
      header("Content-type:text/html;charset=utf-8");
      $ch = curl_init();
      curl_setopt ($ch, CURLOPT_URL, "http://q16.3g.qq.com/g/s?sid=5JGbhQ3rfaIpGEUl"); //发贴地址
      curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_POST,true); //设置POST方式
      curl_setopt($ch, CURLOPT_POSTFIELDS,"u=145526964&saveUrl=0&do=send&on=1&aid=发送&msg=你好，测试");//发送的post值
      $file_contents = curl_exec($ch);//获得返回值
      curl_close($ch);
      // header("Content-type:text/html;charset=utf-8");
      // //填写上一步中获取的sid，你也可以改成$_GET来传递sid
      // $sid  = '5JGbhQ3rfaIpGEUl';
      // //接收方的QQ和要发送的内容
      // $qq   = '1574930549';
      // $text = '123';
      // //准备要POST的数据
      // $data = array(
      //       'u'         => $qq,
      //       'saveUrl'   => 0,
      //       'do'        => 'send',
      //       'on'        => 1,
      //       'aid'       => '发送',
      //       'msg'       => $text,
      // );
      // //开始CURL模拟发送
      // $ch = curl_init();
      // curl_setopt($ch,CURLOPT_URL,'http://q16.3g.qq.com/g/s?sid=' . $sid);
      // curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
      // curl_setopt($ch,CURLOPT_POST,true);
      // curl_setopt($ch,CURLOPT_POSTFIELDS,http_build_query($data));
      // $file = curl_exec($ch);
      // curl_close($ch);
      // //分析发送是否成功
      // preg_match('%<p align="left">(.*?)<br/>%si',$file,$callback);
      // $callback = $callback[1];
      // echo $callback;
?>
<!-- https://mail.qq.com/cgi-bin/frame_html?sid=5JGbhQ3rfaIpGEUl&r=d8674555532e08516ec2e21576f34ade -->
<!-- http://wpa.qq.com/msgrd?v=3&amp;uin=1574930549&amp;site=qq&amp;menu=yes -->