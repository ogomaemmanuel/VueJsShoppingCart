import { mount,createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import InventoryEdit from '@/components/admin/Inventory/InventoryEdit.vue'

//const localVue = createLocalVue()
//localVue.use(VueRouter)

describe('InventoryEdit', () => {
    it('renders props.msg when passed', () => {
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
        expect(wrapper.vm.product.name).toBe('Tesla')
    })
})