export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from);
  console.log('to', to);
  if (from.fullPath === '/') {
    //”/“にリダイレクトさせる
    return navigateTo('/');
    
    //ページ移動を中止したい場合
    //return abortNavigation();

    //isAdmin関数はアクセスしているユーザが管理者かどうかチェックする関数です。
    //isAdminは存在しないので動作しません。各自が要件にあった関数を作成する必要があります。
    //管理者ではない場合は/loginにリダイレクトされ管理者の場合はそのままページが表示されます。
    /* if (isAdmin() === false) {
        return navigateTo('/login')
    } */
  }
});