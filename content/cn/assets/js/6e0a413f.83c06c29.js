"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[29679],{8280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"release-1.0.0-beta2","title":"Release 1.0.0-beta2","description":"Release 1.0.0-beta2 (docs)","source":"@site/releases/release-1.0.0-beta2.md","sourceDirName":".","slug":"/release-1.0.0-beta2","permalink":"/cn/releases/release-1.0.0-beta2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Release 1.0.0-beta2","sidebar_position":3,"layout":"releases","toc":true},"sidebar":"releases","previous":{"title":"Release 0.14.1","permalink":"/cn/releases/release-0.14.1"},"next":{"title":"Release 1.0.0-beta1","permalink":"/cn/releases/release-1.0.0-beta1"}}');var r=a(74848),s=a(28453);a(11470),a(19365);const i={title:"Release 1.0.0-beta2",sidebar_position:3,layout:"releases",toc:!0},l=void 0,o={},d=[{value:"Release 1.0.0-beta2 (docs)",id:"release-100-beta2-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Format changes",id:"format-changes",level:3},{value:"Timeline",id:"timeline",level:4},{value:"Log File Format",id:"log-file-format",level:4},{value:"Metadata indexes",id:"metadata-indexes",level:3},{value:"Secondary Index",id:"secondary-index",level:4},{value:"Partition Stats Index",id:"partition-stats-index",level:4},{value:"API Changes",id:"api-changes",level:3},{value:"Positional Merging with Filegroup Reader",id:"positional-merging-with-filegroup-reader",level:4},{value:"Hudi-Flink Enhancements",id:"hudi-flink-enhancements",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"release-100-beta2-docs",children:[(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/releases/tag/release-1.0.0-beta2",children:"Release 1.0.0-beta2"})," (",(0,r.jsx)(t.a,{href:"/docs/next/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Apache Hudi 1.0.0-beta2 is the second beta release of Apache Hudi. This release is meant for early adopters to try\nout the new features and provide feedback. The release is not meant for production use."}),"\n",(0,r.jsx)(t.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsxs)(t.p,{children:["This release contains major format changes as we will see in highlights below. We encourage users to try out the\n",(0,r.jsx)(t.strong,{children:"1.0.0-beta2"})," features on new tables. The 1.0 general availability (GA) release will support automatic table upgrades\nfrom 0.x versions, while also ensuring full backward compatibility when reading 0.x Hudi tables using 1.0, ensuring a\nseamless migration experience."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Given that timeline format and log file format has changed in this ",(0,r.jsx)(t.strong,{children:"beta release"}),", it is recommended not to attempt to do\nrolling upgrades from older versions to this release."]})}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"format-changes",children:"Format changes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-6242",children:"HUDI-6242"})," is the main epic covering all the format changes proposals,\nwhich are also partly covered in the ",(0,r.jsx)(t.a,{href:"/tech-specs-1point0",children:"Hudi 1.0 tech specification"}),". The following are the main\nchanges in this release:"]}),"\n",(0,r.jsx)(t.h4,{id:"timeline",children:"Timeline"}),"\n",(0,r.jsxs)(t.p,{children:["No major changes in this release. Refer to ",(0,r.jsx)(t.a,{href:"/cn/releases/release-1.0.0-beta1#timeline",children:"1.0.0-beta1#timeline"})," for more details."]}),"\n",(0,r.jsx)(t.h4,{id:"log-file-format",children:"Log File Format"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to the fields in the log file header added in ",(0,r.jsx)(t.a,{href:"/cn/releases/release-1.0.0-beta1#log-file-format",children:"1.0.0-beta1"}),", we also\nstore a flag, ",(0,r.jsx)(t.code,{children:"IS_PARTIAL"})," to indicate whether the log block contains partial updates or not."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata-indexes",children:"Metadata indexes"}),"\n",(0,r.jsxs)(t.p,{children:["In 1.0.0-beta1, we added support for functional index. In 1.0.0-beta2, we have added support for secondary indexes and\npartition stats index to the ",(0,r.jsx)(t.a,{href:"/blog/2022/05/17/Introducing-Multi-Modal-Index-for-the-Lakehouse-in-Apache-Hudi",children:"multi-modal indexing"})," subsystem."]}),"\n",(0,r.jsx)(t.h4,{id:"secondary-index",children:"Secondary Index"}),"\n",(0,r.jsxs)(t.p,{children:["Secondary indexes allow users to create indexes on columns that are not part of record key columns in Hudi tables (for\nrecord key fields, Hudi supports ",(0,r.jsx)(t.a,{href:"/blog/2023/11/01/record-level-index",children:"Record-level Index"}),". Secondary indexes can be used to speed up\nqueries with predicate on columns other than record key columns."]}),"\n",(0,r.jsx)(t.h4,{id:"partition-stats-index",children:"Partition Stats Index"}),"\n",(0,r.jsx)(t.p,{children:"Partition stats index aggregates statistics at the partition level for the columns for which it is enabled. This helps\nin efficient partition pruning even for non-partition fields."}),"\n",(0,r.jsxs)(t.p,{children:["To try out these features, refer to the ",(0,r.jsx)(t.a,{href:"/docs/next/sql_ddl#create-partition-stats-index",children:"SQL guide"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"api-changes",children:"API Changes"}),"\n",(0,r.jsx)(t.h4,{id:"positional-merging-with-filegroup-reader",children:"Positional Merging with Filegroup Reader"}),"\n",(0,r.jsxs)(t.p,{children:["In 1.0.0-beta1, we added a new ",(0,r.jsx)(t.a,{href:"/releases/release-1.0.0-beta1#new-filegroup-reader",children:"filegroup reader"}),", which provides\n5.7x performance benefits for snapshot queries on Merge-on-Read tables with updates. The reader now\nprovides position-based merging, as an alternative to existing key-based merging, and skipping pages based on record\npositions. The new filegroup reader is integrated with Spark and Hive, and enabled by default. To enable positional\nmerging set below configs:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:"hoodie.merge.use.record.positions=true\n"})}),"\n",(0,r.jsx)(t.h3,{id:"hudi-flink-enhancements",children:"Hudi-Flink Enhancements"}),"\n",(0,r.jsxs)(t.p,{children:["This release comes with the support for ",(0,r.jsx)(t.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/joins/#lookup-join",children:"lookup joins"}),".\nA lookup join is typically used to enrich a table with data that is queried from an external system. The join requires\none table to have a processing time attribute and the other table to be backed by a lookup source connector. Head over\nto the ",(0,r.jsx)(t.a,{href:"/docs/next/sql_dml#lookup-joins",children:"FLink SQL guide"})," to try out this feature."]}),"\n",(0,r.jsx)(t.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,r.jsxs)(t.p,{children:["The raw release notes are available ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12354810",children:"here"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(96540),r=a(34164),s=a(23104),i=a(56347),l=a(205),o=a(57485),d=a(31682),u=a(70679);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,c]=f({queryString:a,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=d??g;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),m(e)}),[c,m,s]),tabValues:s}}var m=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),r=l[a].value;r!==n&&(d(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:c,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,x.jsx)(w,{...e,children:c(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);