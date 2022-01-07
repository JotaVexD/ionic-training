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
ionic capacitor sync
~~~
Passo 3:
(Buildar o APK pelo Android Studio ou pelo Terminal)

Pelo Terminar rodar o código
~~~
cd android && ./gradlew assembleDebug && cd ..
~~~

Se a tudo for concluída com êxito, você encontrará o apk do seu aplicativo em android/app/build/outputs/apk/debug/app-debug.apk
