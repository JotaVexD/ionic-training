# Treino Ionic
### Aplicação em Ionic e Angular, com sistema de Autenticação por firebase (GitHub)

#
## Instalação das Dependências
Execute na pasta do projeto:
~~~
npm install
~~~ 
Execute logo depois:
~~~
ionic serve
~~~ 

#
## Buildando para o Android (APK)
Passo 1:
~~~
ionic capacitor build android --release
~~~
Passo 2 (Sincronizar com o Android Studio)
~~~
Assim que o Android Studio abrir
Clique em Build --> Build Bundle /Apk
~~~

Se a tudo for concluída com êxito, você encontrará o apk do seu aplicativo em android/app/build/outputs/apk/debug/app-debug.apk
