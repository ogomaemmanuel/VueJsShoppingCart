import { mount,createLocalVue } from '@vue/test-utils'
import InventoryEdit from '@/components/admin/Inventory/InventoryEdit.vue'

describe('InventoryEdit', () => {
    it('renders update text in a button', () => {

        const product =  {
            name:"Tesla",
            qty:"",
            description:"",
            price:"",
            category:"",
            imageUlr:"",
            id:"1"

        }
        const $route = {
            path: '/some/path',params:{product:product}
        }
        const wrapper = mount(InventoryEdit, {
            stubs:['el-form-item','el-input','el-container','el-button','el-card','el-form'],
            mocks: {
                $route
            }
        })
        expect(wrapper.text()).toMatch('Update')
    });

    it('renders product on the first input field when passed', () => {
        const product =  {
            name:"Tesla",
            qty:"",
            description:"",
            price:"",
            category:"",
            imageUlr:"",
            id:"1"

        }
        const $route = {
            path: '/some/path',params:{product:product}
        }

        const wrapper = mount(InventoryEdit, {
            stubs:['el-form-item','el-input','el-container','el-button','el-card','el-form'],
            mocks: {
                $route
            }
        })
        // const product_name_input = wrapper.find('el-input')[0];
        // expect(product_name_input.value).toBe('Tesla')
    })
})


