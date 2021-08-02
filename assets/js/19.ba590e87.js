(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{204:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},function(){var s=this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq","aria-hidden":"true"}},[s._v("#")]),s._v(" rocketMq")]),s._v(" "),a("h2",{attrs:{id:"创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/docker/rocketmq\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/docker/rocketmq\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"路径约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径约定","aria-hidden":"true"}},[s._v("#")]),s._v(" 路径约定")]),s._v(" "),a("ul",[a("li",[s._v("data\n"),a("ul",[a("li",[s._v("brokerconf\n"),a("ul",[a("li",[s._v("broker.conf")])])]),s._v(" "),a("li",[s._v("logs")]),s._v(" "),a("li",[s._v("store")])])])]),s._v(" "),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.5'")]),s._v("\nservices:\n  rmqnamesrv:\n    image: foxiswho/rocketmq:server\n    container_name: rmqnamesrv\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9876")]),s._v(":9876\n    volumes:\n      - ./data/logs:/opt/logs\n      - ./data/store:/opt/store\n    networks:\n        rmq:\n          aliases:\n            - rmqnamesrv\n\n  rmqbroker:\n    image: foxiswho/rocketmq:broker\n    container_name: rmqbroker\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10909")]),s._v(":10909\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10911")]),s._v(":10911\n    volumes:\n      - ./data/logs:/opt/logs\n      - ./data/store:/opt/store\n      - ./data/brokerconf/broker.conf:/etc/rocketmq/broker.conf\n    environment:\n        NAMESRV_ADDR: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rmqnamesrv:9876"')]),s._v("\n        JAVA_OPTS: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -Duser.home=/opt"')]),s._v("\n        JAVA_OPT_EXT: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-server -Xms128m -Xmx128m -Xmn128m"')]),s._v("\n    command: mqbroker -c /etc/rocketmq/broker.conf\n    depends_on:\n      - rmqnamesrv\n    networks:\n      rmq:\n        aliases:\n          - rmqbroker\n\n  rmqconsole:\n    image: styletang/rocketmq-console-ng\n    container_name: rmqconsole\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080\n    environment:\n        JAVA_OPTS: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Drocketmq.namesrv.addr=rmqnamesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false"')]),s._v("\n    depends_on:\n      - rmqnamesrv\n    networks:\n      rmq:\n        aliases:\n          - rmqconsole\n\nnetworks:\n  rmq:\n    name: rmq\n    driver: bridge\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])]),a("h2",{attrs:{id:"broker-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-conf","aria-hidden":"true"}},[s._v("#")]),s._v(" broker.conf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n#  Unless required by applicable law or agreed to in writing, software\n#  distributed under the License is distributed on an "AS IS" BASIS,\n#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n#  See the License for the specific language governing permissions and\n#  limitations under the License.\n\n\n# 所属集群名字\nbrokerClusterName=DefaultCluster\n\n# broker 名字，注意此处不同的配置文件填写的不一样，如果在 broker-a.properties 使用: broker-a,\n# 在 broker-b.properties 使用: broker-b\nbrokerName=broker-a\n\n# 0 表示 Master，> 0 表示 Slave\nbrokerId=0\n\n# nameServer地址，分号分割\n# namesrvAddr=rocketmq-nameserver1:9876;rocketmq-nameserver2:9876\n\n# 启动IP,如果 docker 报 com.alibaba.rocketmq.remoting.exception.RemotingConnectException: connect to <192.168.0.120:10909> failed\n# 解决方式1 加上一句 producer.setVipChannelEnabled(false);，解决方式2 brokerIP1 设置宿主机IP，不要使用docker 内部IP\n# brokerIP1=192.168.0.253\n\n# 在发送消息时，自动创建服务器不存在的topic，默认创建的队列数\ndefaultTopicQueueNums=4\n\n# 是否允许 Broker 自动创建 Topic，建议线下开启，线上关闭 ！！！这里仔细看是 false，false，false\nautoCreateTopicEnable=true\n\n# 是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭\nautoCreateSubscriptionGroup=true\n\n# Broker 对外服务的监听端口\nlistenPort=10911\n\n# 删除文件时间点，默认凌晨4点\ndeleteWhen=04\n\n# 文件保留时间，默认48小时\nfileReservedTime=120\n\n# commitLog 每个文件的大小默认1G\nmapedFileSizeCommitLog=1073741824\n\n# ConsumeQueue 每个文件默认存 30W 条，根据业务情况调整\nmapedFileSizeConsumeQueue=300000\n\n# destroyMapedFileIntervalForcibly=120000\n# redeleteHangedFileInterval=120000\n# 检测物理文件磁盘空间\ndiskMaxUsedSpaceRatio=88\n# 存储路径\n# storePathRootDir=/home/ztztdata/rocketmq-all-4.1.0-incubating/store\n# commitLog 存储路径\n# storePathCommitLog=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/commitlog\n# 消费队列存储\n# storePathConsumeQueue=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/consumequeue\n# 消息索引存储路径\n# storePathIndex=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/index\n# checkpoint 文件存储路径\n# storeCheckpoint=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/checkpoint\n# abort 文件存储路径\n# abortFile=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/abort\n# 限制的消息大小\nmaxMessageSize=65536\n\n# flushCommitLogLeastPages=4\n# flushConsumeQueueLeastPages=2\n# flushCommitLogThoroughInterval=10000\n# flushConsumeQueueThoroughInterval=60000\n\n# Broker 的角色\n# - ASYNC_MASTER 异步复制Master\n# - SYNC_MASTER 同步双写Master\n# - SLAVE\nbrokerRole=ASYNC_MASTER\n\n# 刷盘方式\n# - ASYNC_FLUSH 异步刷盘\n# - SYNC_FLUSH 同步刷盘\nflushDiskType=ASYNC_FLUSH\n\n# 发消息线程池数量\n# sendMessageThreadPoolNums=128\n# 拉消息线程池数量\n# pullMessageThreadPoolNums=128\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br")])]),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose up\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),a("p",[s._v("访问 http://rmqIP:8080 登入控制台")])])}],!1,null,null,null);n.default=r.exports}}]);