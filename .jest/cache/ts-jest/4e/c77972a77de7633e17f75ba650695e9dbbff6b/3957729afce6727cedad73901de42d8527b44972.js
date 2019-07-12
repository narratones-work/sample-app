"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainState = {
    init: false,
    isLoading: null
};
function default_1(state = MainState, action) {
    let result = state;
    console.log("changing main type", action.type);
    switch (action.type) {
        case "MAIN_CHANGE_INIT":
            result = Object.assign({}, result, { init: !state.init });
            break;
    }
    return result;
}
exports.default = default_1;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXERldmVsb3BtZW50XFxuamFwcGxpY2F0aW9uc1xcd3V3aW5cXHNyY1xcbWFpblxcbWFpbi5yZWR1Y2Vycy50cyIsIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sU0FBUyxHQUFHO0lBQ2QsSUFBSSxFQUFHLEtBQUs7SUFDWixTQUFTLEVBQUcsSUFBSTtDQUNuQixDQUFBO0FBRUQsbUJBQXlCLEtBQUssR0FBRyxTQUFTLEVBQUUsTUFBb0I7SUFDNUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQjtZQUNyQixNQUFNLHFCQUFRLE1BQU0sSUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFFLENBQUE7WUFDekMsTUFBTTtLQUNUO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVRELDRCQVNDO0FBQUEsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcRGV2ZWxvcG1lbnRcXG5qYXBwbGljYXRpb25zXFx3dXdpblxcc3JjXFxtYWluXFxtYWluLnJlZHVjZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmNvbnN0IE1haW5TdGF0ZSA9IHtcclxuICAgIGluaXQgOiBmYWxzZSxcclxuICAgIGlzTG9hZGluZyA6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gTWFpblN0YXRlLCBhY3Rpb24gOiBBY3Rpb248YW55Pikge1xyXG4gICAgbGV0IHJlc3VsdCA9IHN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2luZyBtYWluIHR5cGVcIiwgYWN0aW9uLnR5cGUpO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFwiTUFJTl9DSEFOR0VfSU5JVFwiOlxyXG4gICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0LCBpbml0OiAhc3RhdGUuaW5pdCB9IFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTsiXSwidmVyc2lvbiI6M30=