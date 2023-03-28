# CSS 정리
## 문서 스타일링 방법
1. ```<TAG style="">```
2. ```<style>...</style>```
3. .css 파일 만들어서 link

## css 형식
```css
selector {
    attribute: value;   /* comment */
}
```

### selector
<pre>
*       모든 태그 다 적용
TAG     특정 태그 적용 
#id     유일한 id에 적용      
.class  같은 class에 적용

selector1 > selector2   selector1(부모)의 자식 selector2(자식)에 적용   
selector1 selector2     selector1의 자손 selector2에 적용
selector1, selector2    selector1과 selector2에 같이 적용
selector + selector2    selector1의 첫 자매인 selector2를 선택
selector1 ~ selector2   selector1의 자매 중 모든 selector2를 선택

selector:frist-child()  
selector:nth-child(n)
selector:last-child()

selector:hover  마우스 올렸을 때의 selector(선택)

[속성="값"]     <... 속성="값">에 적용
</pre>

# 우선순위
1. !important
2. ```<TAG style="">```
3. #id
4. .class
5. TAG
6. \*
- 구체> 포괄
- 같은 우선순위일 때, 나중에 쓴게 적용