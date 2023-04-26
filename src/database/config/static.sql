BEGIN;

INSERT INTO users(username, password, email) VALUES
 ('hmood', '1234', 'hmood@gmail.com'),
 ('hoso', '22234', 'hoso@gmail.com');

INSERT INTO posts(content, image, user_id) VALUES
  ('hi guys im hmood i love u', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_39.jpg', 1),
  ('today i want to play r6', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_39.jpg', 2);

INSERT INTO comments(content, user_id, post_id) VALUES
  ('firstCom', 2, 1),
  ('secCom', 2, 1),
  ('secCom', 1, 2),
  ('secCom', 1, 2);

COMMIT;

