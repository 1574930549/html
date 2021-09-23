<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<script language="JavaScript">
<!--
-->
</script>
<html>
<head>
	<title>基于遗传算法的卷烟生产计划排程管理系统</title>
</head>
<frameset name="frame1" rows="86,*" cols="*" frameborder="1" border="1" bordercolor="#000000" framespacing="0">
	<frame src="/MES_1.3_SSH/jsp/top.jsp" name="topFrame" scrolling="no" noresize>
	<frameset name="frame11" cols="*,385" frameborder="1" border="1" bordercolor="#ffffff" framespacing="0" >
		<frame src="/MES_1.3_SSH/jsp/right.jsp" name="mainFrame" scrolling="no" noresize>
		<frame src="/MES_1.3_SSH/jsp/lift.jsp" name="liftFrame" scrolling="no" noresize>
	</frameset>

</html>

