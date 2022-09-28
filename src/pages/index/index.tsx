import { View, Button } from '@tarojs/components';
import { observer } from 'mobx-react';
import { useStoreContext } from '@/store';

import './index.less';

const Index = () => {
  const { authStore } = useStoreContext();

  return (
    <View>
      <View>猫猫搞钱小分队</View>
      <View>{ authStore.authToken }</View>
      <Button onClick={() => {
        authStore.setAuthToken('update')
      }}>更新mobx數據</Button>
    </View>
  );
};

export default observer(Index);
